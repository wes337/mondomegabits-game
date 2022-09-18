import { createSignal, For, createMemo, onCleanup, Show } from "solid-js";
import { debounce } from "@solid-primitives/scheduled";
import { matchSorter } from "match-sorter";
import MODAL_NAMES from "../../constants/modal";
import {
  ALL_CARD_TYPES,
  ALL_BASIC_CARDS,
  CARD_RARITY_LEVELS,
} from "../../constants/card";
import { uniqueArrayByKey } from "../../utils/array";
import {
  getCardCountByKey,
  getCardCountByName,
  getCardCountByType,
} from "../../utils/deck";
import useStore from "../../store";
import Checkbox from "../shared/Checkbox";
import CircleButton from "../shared/CircleButton";
import DeckBuilderCard from "../card/DeckBuilderCard";
import CardSpotlight from "../card/CardSpotlight";
import IconButton from "../shared/IconButton";
import useModal from "../../hooks/useModal";
import "./DeckBuilder.scss";
import useDeckBuilder from "../../hooks/useDeckBuilder";

function DeckBuilder() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();
  const deckBuilder = useDeckBuilder();
  const [deckPanel, setDeckPanel] = createSignal("");
  const [searchQuery, setSearchQuery] = createSignal("");
  const [typeFilters, setTypeFilters] = createSignal([]);
  const [rarityFilters, setRarityFilters] = createSignal([]);

  const deckDraft = createMemo(() => deckBuilder.draft());

  const cards = createMemo(() => {
    let cards = ALL_BASIC_CARDS;

    if (searchQuery()) {
      cards = matchSorter(cards, searchQuery(), {
        keys: ["name", "faction", "bodyText"],
        threshold: matchSorter.rankings.CONTAINS,
      });
    }

    if (typeFilters().length > 0) {
      cards = cards.filter((card) => {
        return typeFilters().includes(card.type);
      });
    }

    if (rarityFilters().length > 0) {
      cards = cards.filter((card) => {
        return rarityFilters().includes(card.rarity.toString());
      });
    }
    return cards;
  });

  const onScroll = (event) => {
    if (event.target.scrollTop > event.target.offsetTop) {
      event.target.classList.add("sticky");
    } else {
      event.target.classList.remove("sticky");
    }
  };

  const onChangeFilter = (event) => {
    const filter = event.target.value;
    const enabled = event.target.checked;

    if (event.target.name === "type") {
      if (enabled) {
        setTypeFilters((filters) => [...new Set([...filters, filter])]);
      } else {
        setTypeFilters((filters) => filters.filter((f) => f !== filter));
      }
    } else if (event.target.name === "rarity") {
      if (enabled) {
        setRarityFilters((filters) => [...new Set([...filters, filter])]);
      } else {
        setRarityFilters((filters) => filters.filter((f) => f !== filter));
      }
    }
  };

  const clearAllFilters = () => {
    setTypeFilters([]);
    setSearchQuery("");
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

  const debounceSetSearchQuery = debounce((event) => {
    setSearchQuery(event.target.value);
  }, 500);

  onCleanup(() => {
    debounceSetSearchQuery.clear();
  });

  const resetDeck = () => {
    clearAllFilters();
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
            onKeyDown={debounceSetSearchQuery}
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
                  value={rarity}
                  onChange={onChangeFilter}
                />
              )}
            </For>
          </fieldset>
          <CircleButton
            label="Clear"
            onClick={clearAllFilters}
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
                <span class="teal">{cards().length}</span>
              </div>
            </div>
            <hr class="tall" />
          </div>
          <div class="cards-list">
            <For each={cards()}>
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
