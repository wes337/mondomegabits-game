import { createSignal, createMemo, For, Show } from "solid-js";
import useStore from "./store";
import Chat from "./Chat";
import "./Room.scss";
import CountDown from "./CountDown";
import CircleButton from "./CircleButton";

function Room() {
  const [ready, setReady] = createSignal(false);
  const { state, sendMessage } = useStore();

  const allUsersAreReady = createMemo(
    () => !state.room?.users?.find((user) => user.status !== "ready")
  );

  const iAmReady = createMemo(() =>
    state.room?.users?.find(
      (user) => user.id === state.user.id && user.status === "ready"
    )
  );

  const leaveRoom = () => {
    sendMessage({ type: "leave" });
  };

  const startGame = () => {
    sendMessage({ type: "start" });
  };

  const toggleReady = () => {
    const nextValue = !iAmReady();

    const status = nextValue ? "ready" : "waiting";

    sendMessage({
      type: "ready",
      params: {
        roomCode: state.room.code,
        status,
      },
    });

    setReady(nextValue);
  };

  return (
    <div class="room">
      <div class="main">
        <div className="header">
          <div class="room-name">
            <hr class="dotted-double" />
            <h1 class="wide color-change">{state.room.code}</h1>
            <hr class="dotted-double" />
          </div>
          <Show when={allUsersAreReady()}>
            <CountDown callback={startGame} />
          </Show>
        </div>
        <Chat />
      </div>
      <div class="users">
        <span class="yellow">/// </span>Puppet Masters In Room:
        <hr class="top" />
        <ul class="list">
          <For each={state.room.users}>
            {(user) => (
              <li>
                <div class="name">
                  <span class={user.id === state.user.id ? "glow" : "white"}>
                    {user.name}
                  </span>
                </div>
                <div class="status">
                  <div class="check">
                    <span class="red">[</span>
                    <span class="yellow">
                      {user.status === "ready" ? "✓" : " "}
                    </span>
                    <span class="red">]</span>
                  </div>
                  {user.status.toUpperCase()}
                </div>
              </li>
            )}
          </For>
        </ul>
        <hr class="bottom" />
      </div>
      <div class="footer panel">
        <CircleButton
          label={iAmReady() ? "Unready" : "Ready"}
          onClick={toggleReady}
          color="red"
        />

        <CircleButton label="Leave" onClick={leaveRoom} />
      </div>
    </div>
  );
}

export default Room;
