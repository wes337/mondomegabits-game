import { createSignal, createMemo, onCleanup } from "solid-js";
import { debounce } from "@solid-primitives/scheduled";
import { matchSorter } from "match-sorter";
import { ALL_BASIC_CARDS } from "../constants/card";

const [searchQuery, setSearchQuery] = createSignal("");
const [filters, setFilters] = createSignal({});

function useCardFilter() {
  const addFilter = (filterName, filterValue) => {
    setFilters((filters) => ({
      ...filters,
      [filterName]: [...new Set([...(filters[filterName] || []), filterValue])],
    }));
  };

  const removeFilter = (filterName, filterValue) => {
    setFilters((filters) => ({
      ...filters,
      [filterName]: filters[filterName].filter(
        (filter) => filter !== filterValue
      ),
    }));
  };

  const resetAllFilters = () => {
    setFilters([]);
    setSearchQuery("");
  };

  const searchCards = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const debounceSearchCards = debounce((searchQuery) => {
    searchCards(searchQuery);
  }, 500);

  const filteredCards = createMemo(() => {
    let cards = ALL_BASIC_CARDS;

    if (searchQuery()) {
      cards = matchSorter(cards, searchQuery(), {
        keys: ["name", "faction", "bodyText"],
        threshold: matchSorter.rankings.CONTAINS,
      });
    }

    const hasNoFilters = Object.values(filters()).flat().length === 0;
    if (hasNoFilters) {
      return cards;
    }

    Object.entries(filters()).forEach(([filterName, filterValues]) => {
      cards = cards.filter((card) => {
        return (
          card[filterName] && filterValues.includes(card[filterName].toString())
        );
      });
    });

    return cards;
  });

  onCleanup(() => {
    debounceSearchCards.clear();
  });

  return {
    cards: filteredCards,
    add: addFilter,
    remove: removeFilter,
    reset: resetAllFilters,
    search: debounceSearchCards,
    searchQuery,
    filters,
  };
}

export default useCardFilter;
