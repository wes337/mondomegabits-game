import { createSignal, For, createMemo, createEffect, Show } from "solid-js";
import MODAL_NAMES from "../../constants/modal";
import { ALL_CARD_TYPES, CARD_RARITY_LEVELS } from "../../constants/card";
import { uniqueArrayByKey } from "../../utils/array";
import {
  getCardCountByKey,
  getCardCountByName,
  getCardCountByType,
} from "../../utils/deck";
import useModal from "../../hooks/useModal";
import useDeckBuilder from "../../hooks/useDeckBuilder";
import useCardFilter from "../../hooks/useCardFilter";
import useStore from "../../store";
import IconButton from "../shared/IconButton";
import Checkbox from "../shared/Checkbox";
import CircleButton from "../shared/CircleButton";
import DeckBuilderCard from "../card/DeckBuilderCard";
import CardSpotlight from "../card/CardSpotlight";
import "./DeckBuilder.scss";

function DeckBuilder() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();
  const deckBuilder = useDeckBuilder();
  const cardFilter = useCardFilter();
  const [deckPanel, setDeckPanel] = createSignal("");
  const [searchQuery, setSearchQuery] = createSignal("");

  const deckDraft = createMemo(() => deckBuilder.draft());

  createEffect(() => {
    if (searchQuery().length > 0) {
      cardFilter.search(searchQuery());
    }
  });

  const onScroll = (event) => {
    if (event.target.scrollTop > event.target.offsetTop) {
      event.target.classList.add("sticky");
    } else {
      event.target.classList.remove("sticky");
    }
  };

  const goBack = () => {
    setState({
      deckBuilderOpen: false,
    });

    const deck =
      state.user.decks[0]?.cards?.length > 0
        ? state.user.decks[0].cards.map((card) => card.id)
        : null;

    sendMessage({
      type: "lobby",
      params: {
        userName: state.user.name,
        deck,
      },
    });
  };

  const deckList = createMemo(() => {
    const deck = deckDraft();

    const cardNames = getCardCountByKey(deck, "name");
    const cardTypes = getCardCountByKey(deck, "type");
    const list = {};

    Object.keys(cardTypes).forEach((type) => {
      const names = deck.cards
        .filter((card) => card.type === type)
        .map((card) => card.name);
      names.forEach((name) => {
        if (!list[type]) {
          list[type] = {};
        }
        list[type][name] = cardNames[name];
      });
    });

    return list;
  });

  const onChangeFilter = (event) => {
    const { name, value, checked } = event.target;

    if (checked) {
      cardFilter.add(name, value);
    } else {
      cardFilter.remove(name, value);
    }
  };

  const filterIsChecked = (filter, value) => {
    return cardFilter.filters()?.[filter]?.includes(value.toString());
  };

  const resetDeck = () => {
    cardFilter.reset();
    deckBuilder.reset();
  };

  const getClassName = () => {
    let className = "deck-builder";

    if (deckPanel()) {
      className += ` deck-${deckPanel()}`;
    }

    return className;
  };

  return (
    <>
      <div class={getClassName()}>
        <div class="settings">
          <div class="settings-left">
            <CircleButton label="Back" onClick={goBack} color="red" small />
            <CircleButton
              label="Import"
              onClick={() => modal.open(MODAL_NAMES.DECK_IMPORT)}
              color="yellow"
              small
            />
            <CircleButton
              label="Export"
              onClick={() => modal.open(MODAL_NAMES.DECK_EXPORT)}
              color="yellow"
              small
            />
          </div>
          <div class="settings-middle">
            <h1 class="deck-title glow">{deckDraft().name}</h1>
          </div>
          <div class="settings-right">
            <CircleButton
              label="Save"
              color="teal"
              small
              disabled={!deckBuilder.validate(deckDraft())}
              onClick={() => modal.open(MODAL_NAMES.DECK_SAVE)}
            />
            <CircleButton
              label="Reset"
              onClick={resetDeck}
              color="teal"
              small
            />
          </div>
        </div>
        <div class="filters panel">
          <div class="header">
            <div class="header-text white">Filters</div>
            <hr class="tall" />
          </div>
          <input
            type="text"
            placeholder="Card Search"
            value={searchQuery()}
            onKeyDown={(event) => setSearchQuery(event.target.value)}
          />
          <fieldset>
            <legend class="white">
              <span class="yellow">/// </span>Type
            </legend>
            <For each={ALL_CARD_TYPES}>
              {(cardType) => (
                <Checkbox
                  name="type"
                  label={cardType}
                  value={cardType}
                  onChange={onChangeFilter}
                  checked={filterIsChecked("type", cardType)}
                />
              )}
            </For>
          </fieldset>
          <fieldset>
            <legend class="white">
              <span class="yellow">/// </span>Rarity
            </legend>
            <For each={CARD_RARITY_LEVELS}>
              {(rarity) => (
                <Checkbox
                  name="rarity"
                  label={`R${rarity}`}
                  value={rarity.toString()}
                  onChange={onChangeFilter}
                  checked={filterIsChecked("rarity", rarity)}
                />
              )}
            </For>
          </fieldset>
          <CircleButton
            label="Clear"
            onClick={() => {
              cardFilter.clear();
              setSearchQuery("");
            }}
            color="red"
            small
          />
        </div>
        <div class="cards panel grunge" onScroll={onScroll}>
          <div class="header">
            <hr class="tall" />
            <div class="header-text">
              <div class="label white">Cards</div>
              <div class="count bracket yellow">
                <span class="teal">{cardFilter.cards().length}</span>
              </div>
            </div>
            <hr class="tall" />
          </div>
          <div class="cards-list">
            <For each={cardFilter.cards()}>
              {(card) => <DeckBuilderCard card={card} />}
            </For>
          </div>
        </div>
        <div class="deck light-grunge" onScroll={onScroll}>
          <div class="header">
            <div class="deck-total white">
              Deck
              <div class="count bracket yellow">
                <span class="teal">{deckDraft().cards.length}</span>
              </div>
            </div>
            <hr class="tall" />
            <div class="deck-controls">
              <IconButton
                icon="window-minimize"
                onClick={() =>
                  setDeckPanel((size) => (size === "" ? "collapsed" : ""))
                }
                small
              />
              <IconButton
                icon="window-maximize"
                onClick={() =>
                  setDeckPanel((size) =>
                    size === "expanded" ? "" : "expanded"
                  )
                }
                small
              />
              <IconButton
                icon="close"
                onClick={() => setDeckPanel("collapsed")}
                small
              />
            </div>
          </div>
          <Show when={deckPanel() !== "collapsed"}>
            <Show when={deckDraft().cards.length > 0}>
              <div class="deck-list">
                <For each={Object.entries(deckList())}>
                  {([type, cards]) => (
                    <div class="deck-list-type">
                      <span class="deck-list-type-label white">
                        {type.toUpperCase()}{" "}
                        <span class=" yellow italic">
                          ({getCardCountByType(deckDraft(), type)})
                        </span>
                      </span>
                      <ul>
                        <For each={Object.entries(cards)}>
                          {([card, count]) => (
                            <li>
                              <span class="red">{count}x</span> {card}
                            </li>
                          )}
                        </For>
                      </ul>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </Show>
          <div class="deck-cards">
            <For each={uniqueArrayByKey(deckDraft().cards, "name")}>
              {(card) => (
                <DeckBuilderCard
                  card={card}
                  stackSize={getCardCountByName(deckDraft(), card.name)}
                />
              )}
            </For>
          </div>
        </div>
      </div>
      <CardSpotlight />
    </>
  );
}

export default DeckBuilder;
