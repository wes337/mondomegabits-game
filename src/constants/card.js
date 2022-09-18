import { allCards } from "../allCards";

export const ALL_BASIC_CARDS = allCards.filter(
  (card) => !card.fileStem.includes("a")
);

export const ALL_CARD_TYPES = [
  ...new Set(ALL_BASIC_CARDS.map((card) => card.type)),
];

export const CARD_RARITY_LEVELS = [1, 2, 3, 4, 5, 6];
