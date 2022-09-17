import { createSignal, For } from "solid-js";
import useStore from "../../store";
import CircleButton from "../shared/CircleButton";
import "./Lobby.scss";

function Lobby() {
  const { state, setState, sendMessage } = useStore();
  const [showInput, setShowInput] = createSignal(false);
  const [input, setInput] = createSignal("");

  const createRoom = () => {
    sendMessage({ type: "create" });
  };

  const joinRoom = (event) => {
    event.preventDefault();
    const roomCode = input();

    if (!roomCode) {
      return;
    }

    sendMessage({ type: "join", params: { roomCode } });
  };

  const openDeckBuilder = () => {
    setState((state) => ({
      deck: {
        ...state.deck,
        open: true,
      },
    }));
  };

  return (
    <div class="lobby">
      <div class="rooms grunge">
        <div class="headers yellow">
          <div class="header">Code</div>
          <div class="header">Users</div>
          <div class="header">Status</div>
        </div>
        <hr class="tall" />
        <For each={state.rooms}>
          {(room) => (
            <div class="room">
              <div class="room-code teal">{room.code}</div>
              <div class="room-users white">
                {room.users} / {room.maxUsers}
              </div>
              <div class={`room-status${room.status === "full" ? " red" : ""}`}>
                {room.status.toUpperCase()}
              </div>
              <div class="room-join">
                <CircleButton
                  label="Join"
                  disabled={room.status !== "open"}
                  onClick={() => {
                    sendMessage({
                      type: "join",
                      params: { roomCode: room.code },
                    });
                  }}
                  color="red"
                  small
                />
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="users">
        <span class="yellow">/// </span>Puppet Masters Online:
        <hr class="top" />
        <ul class="list">
          <For each={state.lobby}>
            {(user) => (
              <li class={user.id === state.user.id ? "glow" : "white"}>
                {user.name}
              </li>
            )}
          </For>
        </ul>
        <hr class="bottom" />
      </div>
      <div class="footer panel">
        <CircleButton label="Create" onClick={createRoom} />
        <CircleButton
          label="Join"
          onClick={() => {
            setShowInput(true);
            setInput("");
          }}
        />
        <CircleButton
          label="Deck Builder"
          onClick={openDeckBuilder}
          color="teal"
        />
      </div>
      <Show when={showInput()}>
        <div class="modal">
          <div class="join-room panel">
            <form onSubmit={joinRoom}>
              <label>Room code:</label>
              <input
                type="text"
                value={input()}
                onChange={(event) => setInput(event.target.value)}
              />
              <div class="modal-footer">
                <button
                  class="button"
                  type="submit"
                  disabled={input().length === 0}
                >
                  OK
                </button>
                <button
                  class="button"
                  type="button"
                  onClick={() => setShowInput(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default Lobby;
