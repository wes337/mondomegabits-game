import { createStore } from "solid-js/store";
import initialState from "./initialState";

const ws = new WebSocket("wss://mondo-megabits.herokuapp.com");

function useStore() {
  const [state, setState] = createStore(initialState);

  const sendMessage = (message) => {
    ws.send(JSON.stringify(message));
  };

  ws.onopen = () => {
    setState({
      connected: true,
    });

    setInterval(() => {
      sendMessage({ type: "ping" });
    }, 40000);
  };

  ws.onclose = () => {
    setState({
      connected: false,
    });
  };

  ws.onmessage = (event) => {
    const { type, params } = JSON.parse(event.data);

    switch (type) {
      case "connected": {
        setState({
          user: {
            name: "",
            id: params.id,
          },
        });
        break;
      }
      case "lobby": {
        setState({
          lobby: params.users,
          room: null,
          rooms: params.otherRooms || [],
        });
        break;
      }
      case "join": {
        const { roomCode, users } = params;
        setState((state) => ({
          lobby: state.lobby.filter((user) => user.id !== state.user.id),
          room: {
            code: roomCode,
            users,
            chatMessages: state.room?.chatMessages || [],
          },
        }));
        break;
      }
      case "leave": {
        const { userId } = params;
        setState({
          room:
            userId === state.user.id
              ? null
              : {
                  ...state.room,
                  users: state.room.users.filter((user) => user.id !== userId),
                },
        });
        break;
      }
      case "leave-game": {
        const { roomCode, users } = params;
        setState({
          game: null,
          room: {
            code: roomCode,
            users,
            chatMessages: state.room?.chatMessages || [],
          },
        });
        break;
      }
      case "chat": {
        if (params.chatMessage.user.id !== state.user.id) {
          setState((state) => ({
            room: {
              ...state.room,
              chatMessages: [
                ...(state.room?.chatMessages || []),
                params.chatMessage,
              ],
            },
          }));
          break;
        }
        break;
      }
      case "ready": {
        const { userId, status } = params;
        setState((state) => ({
          room: {
            ...state.room,
            users: state.room.users.map((user) => {
              if (user.id !== userId) {
                return user;
              }
              return {
                ...user,
                status,
              };
            }),
          },
        }));
        break;
      }
      case "game": {
        const { game } = params;
        setState({ game });
        break;
      }
      default: {
        console.log("Got unknown message type: ", type);
        break;
      }
    }
  };

  return { state, setState, sendMessage };
}

export default useStore;
