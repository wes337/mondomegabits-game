import {
  createSignal,
  For,
  createMemo,
  onMount,
  onCleanup,
  Show,
} from "solid-js";
import { debounce } from "@solid-primitives/scheduled";
import { matchSorter } from "match-sorter";
import { getCardByName, uniqueArrayByKey } from "../../utils";
import { allCards } from "../../allCards";
import useStore from "../../store";
import Checkbox from "../shared/Checkbox";
import CircleButton from "../shared/CircleButton";
import DisplayCard from "../card/DisplayCard";
import CardSpotlight from "../card/CardSpotlight";
import "./DeckBuilder.scss";
import IconButton from "../shared/IconButton";

const allBasicCards = allCards.filter((card) => !card.fileStem.includes("a"));
const cardRarities = [1, 2, 3, 4, 5, 6];

const getCardTypesMap = () => {
  const cardTypesMap = {};

  allBasicCards.forEach((card) => {
    if (!cardTypesMap[card.type]) {
      cardTypesMap[card.type] = [];
    }

    cardTypesMap[card.type].push(card.subtype);
    cardTypesMap[card.type] = [...new Set(cardTypesMap[card.type])];
  });

  return cardTypesMap;
};

function DeckBuilder() {
  const { state, setState, sendMessage } = useStore();
  const [showModal, setShowModal] = createSignal("");
  const [deckName, setDeckName] = createSignal("");
  const [deckPanel, setDeckPanel] = createSignal("");
  const [searchQuery, setSearchQuery] = createSignal("");
  const [typeFilters, setTypeFilters] = createSignal([]);
  const [rarityFilters, setRarityFilters] = createSignal([]);
  const [deckImported, setDeckImported] = createSignal("");
  const cardTypes = getCardTypesMap();

  onMount(() => {
    const defaultDeckName = `${state.user.name}'s Untitled Deck`;
    setDeckName(defaultDeckName);
    setState((state) => ({
      deck: {
        ...state.deck,
        name: defaultDeckName,
      },
    }));
  });

  const cards = createMemo(() => {
    let cards = allBasicCards;

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
    setState((state) => ({
      deck: {
        ...state.deck,
        open: false,
      },
    }));

    sendMessage({
      type: "lobby",
      params: {
        userName: state.user.name,
        deck: state.deck.cards.map((card) => card.id),
      },
    });
  };

  const getCardCountByKey = (key = "id") => {
    const cardCounts = state.deck.cards.reduce((counts, card) => {
      const cardKey = card[key];
      counts[cardKey] = ++counts[cardKey] || 1;
      return counts;
    }, {});

    return cardCounts;
  };

  const getCardCountByType = (type) => {
    const cardTypes = getCardCountByKey("type");
    return cardTypes[type];
  };

  const getCardCountByName = (name) => {
    const cardTypes = getCardCountByKey("name");
    return cardTypes[name];
  };

  const deckList = createMemo(() => {
    const cardNames = getCardCountByKey("name");
    const cardTypes = getCardCountByKey("type");
    const list = {};

    Object.keys(cardTypes).forEach((type) => {
      const names = state.deck.cards
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

  const exportDeck = () => {
    const heading = `${state.deck.name}`;
    const hr = `${`=`.repeat(heading.length)}`;
    let deckString = `${heading}\n${hr}\n`;
    Object.entries(deckList()).forEach(([type, cards]) => {
      deckString += `  ${type}:\n`;
      Object.entries(cards).forEach(([card, count]) => {
        deckString += `    - ${count}x ${card}\n`;
      });
    });

    return deckString;
  };

  const copyDeckToClipboard = () => {
    const deck = exportDeck();
    navigator.clipboard.writeText(deck);
  };

  const debounceSetSearchQuery = debounce((event) => {
    setSearchQuery(event.target.value);
  }, 500);

  onCleanup(() => {
    debounceSetSearchQuery.clear();
  });

  const getClassName = () => {
    let className = "deck-builder";

    if (deckPanel()) {
      className += ` deck-${deckPanel()}`;
    }

    return className;
  };

  const saveDeck = (event) => {
    event.preventDefault();

    setState((state) => ({
      deck: {
        ...state.deck,
        name: deckName(),
      },
    }));
    setShowModal("");

    // Save to local storage? DB?
  };

  const resetDeck = () => {
    const defaultDeckName = `${state.user.name}'s Untitled Deck`;
    setDeckName(defaultDeckName);
    clearAllFilters();
    setState((state) => ({
      deck: {
        ...state.deck,
        cards: [],
        name: defaultDeckName,
      },
    }));
  };

  const importDeck = () => {
    try {
      const lines = deckImported().split("\n");
      const deckName = lines[0].startsWith("#")
        ? lines[0].slice(0, 1).trim()
        : lines[0].trim();

      // We only really care about the card counts
      const cardNamesAndCounts = {};
      lines.forEach((line) => {
        // const match = line.trim().match(/[1,2,3]x.*?\n/);
        const match = line.match(/([1,2,3])\s{0,1}x(.*)/i);
        if (match) {
          const cardCount = match[1].trim();
          const cardName = match[2].trim();
          cardNamesAndCounts[cardName] = cardCount;
        }
      });

      const cards = [];
      Object.entries(cardNamesAndCounts).forEach(([cardName, count]) => {
        const card = getCardByName(cardName);
        if (card) {
          for (let i = 0; i < count; i++) {
            cards.push({ ...card, inDeck: true });
          }
        }
      });

      setDeckName(deckName);
      setState((state) => ({
        deck: {
          ...state.deck,
          name: deckName,
          cards,
        },
      }));
      setShowModal("");
    } catch {
      setShowModal("");
    }
  };

  return (
    <>
      <div class={getClassName()}>
        <div class="settings">
          <div class="settings-left">
            <CircleButton label="Back" onClick={goBack} color="red" small />
            <CircleButton
              label="Import"
              onClick={() => setShowModal("import")}
              color="yellow"
              small
            />
            <CircleButton
              label="Export"
              onClick={() => setShowModal("export")}
              color="yellow"
              small
            />
          </div>
          <div class="settings-middle">
            <h1 class="deck-title glow">{state.deck.name}</h1>
          </div>
          <div class="settings-right">
            <CircleButton
              label="Save"
              color="teal"
              small
              onClick={() => setShowModal("save")}
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
            <For each={Object.keys(cardTypes)}>
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
            <For each={cardRarities}>
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
            <For each={cards()}>{(card) => <DisplayCard card={card} />}</For>
          </div>
        </div>
        <div class="deck light-grunge">
          <div class="header">
            <div class="deck-total white">
              Deck
              <div class="count bracket yellow">
                <span class="teal">{state.deck.cards.length}</span>
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
            <Show when={state.deck.cards.length > 0}>
              <div class="deck-list">
                <For each={Object.entries(deckList())}>
                  {([type, cards]) => (
                    <div class="deck-list-type">
                      <span class="deck-list-type-label white">
                        {type.toUpperCase()}{" "}
                        <span class=" yellow italic">
                          ({getCardCountByType(type)})
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
            <For each={uniqueArrayByKey(state.deck.cards, "name")}>
              {(card) => (
                <DisplayCard
                  card={card}
                  stackSize={getCardCountByName(card.name)}
                />
              )}
            </For>
          </div>
        </div>
      </div>
      <CardSpotlight />
      <Show when={showModal() === "save"}>
        <div class="modal">
          <div class="modal-container panel">
            <div class="modal-header yellow double-arrow">
              <span class="white">Save Deck</span>
            </div>
            <div class="modal-body">
              <form onSubmit={saveDeck}>
                <label>Deck name:</label>
                <input
                  type="text"
                  value={deckName()}
                  minLength={2}
                  maxLength={100}
                  onChange={(event) =>
                    setDeckName(event.target.value.trim().slice(0, 200))
                  }
                />
                <div class="modal-footer">
                  <button
                    class="button"
                    type="submit"
                    disabled={deckName().length === 0}
                  >
                    OK
                  </button>
                  <button
                    class="button"
                    type="button"
                    onClick={() => setShowModal("")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Show>
      <Show when={showModal() === "export"}>
        <div class="modal">
          <div class="modal-container panel">
            <div class="modal-header yellow double-arrow">
              <span class="white">Export Deck</span>
            </div>
            <div class="modal-body">
              <textarea rows={20} cols={80} style="resize: none;" readonly>
                {exportDeck()}
              </textarea>
            </div>
            <div class="modal-footer">
              <button
                class="button"
                type="button"
                onClick={copyDeckToClipboard}
              >
                Copy to Clipboard
              </button>
              <button
                class="button"
                type="button"
                onClick={() => setShowModal("")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Show>
      <Show when={showModal() === "import"}>
        <div class="modal">
          <div class="modal-container panel">
            <div class="modal-header yellow double-arrow">
              <span class="white">Import Deck</span>
            </div>
            <div class="modal-body">
              <textarea
                rows={20}
                cols={80}
                style="resize: none;"
                onChange={(event) => setDeckImported(event.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                class="button"
                type="button"
                disabled={deckImported().length === 0}
                onClick={importDeck}
              >
                Import
              </button>
              <button
                class="button"
                type="button"
                onClick={() => setShowModal("")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
}

export default DeckBuilder;
