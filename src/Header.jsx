import { createSignal, For, Show } from "solid-js";
import useStore from "./store";
import "./Header.scss";

function Header() {
  const { state, sendMessage } = useStore();
  const [roomCodeInput, setRoomCodeInput] = createSignal(null);

  const createRoom = () => {
    sendMessage({ type: "create" });
  };

  const joinRoom = (event) => {
    event.preventDefault();
    const roomCode = roomCodeInput();

    if (!roomCode) {
      return;
    }

    sendMessage({ type: "join", params: { roomCode } });
  };

  const leaveRoom = () => {
    sendMessage({ type: "leave" });
  };

  const startGame = () => {
    sendMessage({
      type: "start",
      params: {
        roomCode: state.room,
      },
    });
  };

  return (
    <div class="header">
      <p>Connected as: {state.user.name}</p>
      <Show
        when={state.room}
        fallback={
          <>
            <div class="create-room">
              <button onClick={createRoom}>Create Room</button>
            </div>
            <form class="join-room" onSubmit={joinRoom}>
              <input
                type="text"
                onChange={(event) => setRoomCodeInput(event.target.value)}
              />
              <button type="submit">Join Room</button>
            </form>
            Rooms:
            <Show when={state.rooms}>
              <ul>
                <For each={Object.keys(state.rooms)}>
                  {(roomCode) => <li>{roomCode}</li>}
                </For>
              </ul>
            </Show>
          </>
        }
      >
        <div class="room-info">
          <p>Room: {state.room}</p>
          <div class="room-users">
            <p>Users:</p>
            <ul>
              <For each={state.rooms[state.room]?.users}>
                {(userInRoom) => <li>{userInRoom}</li>}
              </For>
            </ul>
          </div>
        </div>
        <button onClick={leaveRoom}>Leave Room</button>
        <Show
          when={state.rooms[state.room]?.users?.length >= 2}
          fallback={<div>Waiting for more users...</div>}
        >
          <button onClick={startGame}>Start Game</button>
        </Show>
      </Show>
    </div>
  );
}

export default Header;
