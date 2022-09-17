export default {
  user: {
    id: "",
    name: "",
  },
  connected: false,
  lobby: [],
  room: null,
  rooms: {},
  game: undefined,
  deck: {
    cards: [],
    name: "",
    open: false,
  },
  focus: {
    current: null,
    hover: null,
    spotlight: null,
  },
  target: {
    from: null,
    to: null,
  },
  chatExpanded: true,
  chatInput: "",
};
