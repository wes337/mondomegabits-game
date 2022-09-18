export const getCardCountByKey = (deck, key = "id") => {
  const cardCounts = deck.cards.reduce((counts, card) => {
    const cardKey = card[key];
    counts[cardKey] = ++counts[cardKey] || 1;
    return counts;
  }, {});

  return cardCounts;
};

export const getCardCountByType = (deck, type) => {
  const cardTypes = getCardCountByKey(deck, "type");
  return cardTypes[type];
};

export const getCardCountByName = (deck, name) => {
  const cardNames = getCardCountByKey(deck, "name");
  return cardNames[name];
};
