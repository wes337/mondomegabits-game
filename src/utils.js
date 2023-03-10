import { allCards } from "./allCards";

export const getCardFileStemById = (cardId) => {
  const card = allCards.find((card) => card.id === cardId);

  return card.fileStem;
};

export const getCardByName = (cardName) => {
  const card = allCards.find(
    (card) =>
      card.name.replace(/[^\w\s]/gi, "").toString() ===
      cardName.trim().replace(/[^\w\s]/gi, "")
  );

  return card;
};

export const getCardImage = (card) => {
  return `https://cdn2.mondomegabits.com/cards/95/${card.fileStem}.jpg`;
};

export const getCardImageById = (cardId) => {
  const card = allCards.find(
    (card) => card.id.toString() === cardId.toString()
  );
  return getCardImage(card);
};

export const getRandomCards = (number) => {
  const shuffledCards = [...allCards].sort(() => {
    return 0.5 - Math.random();
  });

  return shuffledCards.slice(0, number);
};

export const hyphenToCamelCase = (hyphenString) => {
  return hyphenString.replace(/-([a-z])/g, (g) => {
    return g[1].toUpperCase();
  });
};

export const isMobileDevice = () => {
  if (window.navigator?.userAgentData) {
    return window.navigator.userAgentData.mobile;
  }

  if (window.navigator?.userAgent) {
    const mobileUserAgents = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
      /Android/i,
      /iPad/i,
      /Playbook/i,
      /Silk/i,
    ];

    return mobileUserAgents.some((mobileUserAgent) => {
      return window.navigator.userAgent.match(mobileUserAgent);
    });
  }

  return false;
};

export const generateKey = (length = 5) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
