import { createMemo, onMount } from "solid-js";
import {
  MAX_COPIES_OF_CARD_PER_DECK,
  MINIMUM_DECK_SIZE,
} from "../constants/deck";
import { arraysAreEqual } from "../utils/array";
import { getCardByName } from "../utils/card";
import { getCardCountByKey } from "../utils/deck";
import useStore from "../store";

function useDeckBuilder() {
  const { state, setState } = useStore();
  const deckDraft = createMemo(() => state.user.decks.draft);
  const myDecks = createMemo(() => state.user.decks.saved);
  const selectedDeck = createMemo(() => state.user.decks.selected);
  const defaultDeckDraftName = createMemo(
    () => `${state.user.name}'s Untitled Deck`
  );

  const updateDeckDraftName = (name) => {
    setState((state) => ({
      user: {
        ...state.user,
        decks: {
          ...state.user.decks,
          draft: {
            ...state.user.decks.draft,
            name,
          },
        },
      },
    }));
  };

  onMount(() => {
    if (!deckDraft().name) {
      updateDeckDraftName(defaultDeckDraftName());
    }
  });

  const isDeckValid = (newDeck) => {
    try {
      const notEnoughCardsInDeck = newDeck.cards.length < MINIMUM_DECK_SIZE;
      if (notEnoughCardsInDeck) {
        return false;
      }

      const cardCounts = getCardCountByKey(newDeck, "id");
      const cardsExceedingLimit = Object.values(cardCounts).filter(
        (count) => count > MAX_COPIES_OF_CARD_PER_DECK
      );

      if (cardsExceedingLimit.length > 0) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  };

  const saveDeck = (newDeck) => {
    setState((state) => ({
      user: {
        ...state.user,
        decks: {
          draft: newDeck,
          selected: newDeck,
          saved: [...state.user.decks.saved, newDeck],
        },
      },
    }));
  };

  const updateDeck = (newDeck) => {
    setState((state) => ({
      user: {
        ...state.user,
        decks: {
          draft: newDeck,
          selected: newDeck,
          saved: state.user.decks.saved.map((deck) => {
            if (deck.name !== newDeck.name) {
              return deck;
            }

            return newDeck;
          }),
        },
      },
    }));
  };

  const saveOrUpdateDeck = (newDeck) => {
    const deck = newDeck || deckDraft();

    const deckIsValid = isDeckValid(deck);

    if (!deckIsValid) {
      return;
    }

    const existingDeck = state.user.decks.saved.find(
      ({ name }) => deck.name === name
    );

    if (existingDeck) {
      updateDeck(deck);
    } else {
      saveDeck(deck);
    }
  };

  const importDeck = (deck) => {
    try {
      const lines = deck.split("\n");
      const name = lines[0].startsWith("#")
        ? lines[0].slice(0, 1).trim()
        : "Imported Deck";

      const cardNamesAndCounts = {};
      lines.forEach((line) => {
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

      const importedDeck = {
        name,
        cards,
      };

      const valid = isDeckValid(importedDeck);
      if (!valid) {
        return null;
      }

      setState((state) => ({
        user: {
          ...state.user,
          decks: {
            ...state.user.decks,
            draft: importedDeck,
          },
        },
      }));
    } catch (error) {
      console.error(error);
      // Do nothing
      return null;
    }
  };

  const exportDeck = (deckToExport) => {
    const deck = deckToExport || deckDraft();

    const heading = `${deck.name}`;
    const hr = `${`=`.repeat(heading.length)}`;
    let deckString = `${heading}\n${hr}\n`;

    const cardCount = getCardCountByKey(deck, "id");
    deck.cards.forEach((card) => {
      const count = cardCount[card.id];
      const line = `  -${count}x ${card.name}\n`;
      deckString += deckString.includes(line) ? "" : line;
    });

    return deckString;
  };

  const resetDeckDraft = () => {
    const name = defaultDeckDraftName();
    setState((state) => ({
      user: {
        ...state.user,
        decks: {
          ...state.user.decks,
          draft: {
            name,
            cards: [],
          },
        },
      },
    }));
  };

  const addOrRemoveCardFromDeckDraft = (card) => {
    const canAddToDeck =
      deckDraft().cards.filter(({ id }) => id === card.id).length < 3;

    if (card.inDeck) {
      const cards = [...deckDraft().cards];
      const index = cards.findIndex(({ id }) => id === card.id);
      cards.splice(index, 1);
      setState((state) => ({
        user: {
          ...state.user,
          decks: {
            ...state.user.decks,
            draft: {
              ...state.user.decks.draft,
              cards,
            },
          },
        },
      }));
    } else if (canAddToDeck) {
      setState((state) => ({
        user: {
          ...state.user,
          decks: {
            ...state.user.decks,
            draft: {
              ...state.user.decks.draft,
              cards: [
                ...state.user.decks.draft.cards,
                { ...card, inDeck: true },
              ],
            },
          },
        },
      }));
    }
  };

  const draftHasUnsavedChanges = () => {
    //   1. Deck draft has cards
    //   2. There are no saved decks with this name
    //   3. There is a saved deck with this name and different cards
    const deckDraftHasNoCards = deckDraft().cards.length === 0;
    if (deckDraftHasNoCards) {
      return false;
    }

    const deckSavedWithThisName = myDecks().find(
      ({ name }) => name === deckDraft().name
    );

    if (deckSavedWithThisName) {
      const deckDraftCardIds = deckDraft().cards.map((card) => card.id);
      const existingDeckCardIds = deckSavedWithThisName.cards.map(
        (card) => card.id
      );

      const existingDeckWasChanged = !arraysAreEqual(
        deckDraftCardIds,
        existingDeckCardIds
      );
      return existingDeckWasChanged;
    }

    return true;
  };

  const removeSavedDeck = (name) => {
    const updatedDecks = myDecks().filter((deck) => deck.name !== name);
    setState((state) => ({
      user: {
        ...state.user,
        decks: {
          ...state.user.decks,
          saved: updatedDecks,
        },
      },
    }));
  };

  const loadSavedDeck = (deckName) => {
    const deck = state.user.decks.saved.find(({ name }) => deckName === name);

    setState((state) => ({
      user: {
        ...state.user,
        decks: {
          ...state.user.decks,
          draft: deck,
          selected: deck,
        },
      },
    }));
  };

  return {
    save: saveOrUpdateDeck,
    validate: isDeckValid,
    import: importDeck,
    export: exportDeck,
    draft: deckDraft,
    reset: resetDeckDraft,
    addOrRemoveCard: addOrRemoveCardFromDeckDraft,
    name: updateDeckDraftName,
    myDecks,
    hasUnsavedChanges: draftHasUnsavedChanges,
    remove: removeSavedDeck,
    load: loadSavedDeck,
    selected: selectedDeck,
  };
}

export default useDeckBuilder;
