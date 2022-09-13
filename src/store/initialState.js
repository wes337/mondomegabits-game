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
  focus: {
    current: null,
    hover: null,
    spotlight: null,
  },
  target: {
    from: null,
    to: null,
  },
  chatExpanded: false,
  chatInput: "",
};
