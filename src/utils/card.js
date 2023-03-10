import { allCards } from "../allCards";
import { ALL_BASIC_CARDS } from "../constants/card";

export const getCardByName = (cardName) => {
  const card = allCards.find(
    (card) =>
      card.name.replace(/[^\w\s]/gi, "").toString() ===
      cardName.trim().replace(/[^\w\s]/gi, "")
  );

  return card;
};

export const getCardTypesMap = () => {
  const cardTypesMap = {};

  ALL_BASIC_CARDS.forEach((card) => {
    if (!cardTypesMap[card.type]) {
      cardTypesMap[card.type] = [];
    }

    cardTypesMap[card.type].push(card.subtype);
    cardTypesMap[card.type] = [...new Set(cardTypesMap[card.type])];
  });

  return cardTypesMap;
};

export const getCardTypeSubtypes = (cardType) => {
  return getCardTypesMap()[cardType];
};

export const getCardFileStemById = (cardId) => {
  const card = allCards.find((card) => card.id === cardId);

  return card.fileStem;
};
