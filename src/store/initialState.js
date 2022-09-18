export default {
  user: {
    id: "",
    name: "",
    decks: [],
  },
  connected: false,
  lobby: [],
  room: null,
  rooms: {},
  game: undefined,
  focus: {
    current: null,
    hover: null,
    spotlight: null,
  },
  target: {
    from: null,
    to: null,
  },
  modal: {
    name: null,
    data: null,
  },
  deckBuilderOpen: false,
  chatExpanded: true,
  chatInput: "",
};
