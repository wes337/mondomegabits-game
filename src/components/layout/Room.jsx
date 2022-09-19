import { createMemo, For, Show } from "solid-js";
import MODAL_NAMES from "../../constants/modal";
import useStore from "../../store";
import Chat from "../shared/Chat";
import CountDown from "../shared/CountDown";
import CircleButton from "../shared/CircleButton";
import useModal from "../../hooks/useModal";
import "./Room.scss";
import useDeckBuilder from "../../hooks/useDeckBuilder";

function Room() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();
  const deckBuilder = useDeckBuilder();

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
    sendMessage({
      type: "start",
    });

    // Clear cards in focus
    setState({
      focus: {
        current: null,
        hover: null,
        spotlight: null,
      },
      target: {
        from: null,
        to: null,
      },
    });
  };

  const toggleReady = () => {
    const nextValue = !iAmReady();

    const status = nextValue ? "ready" : "waiting";

    const deck =
      status === "ready" && deckBuilder.selected()
        ? deckBuilder.selected().cards.map((card) => card.id)
        : null;

    sendMessage({
      type: "status",
      params: {
        status,
        deck,
      },
    });
  };

  return (
    <div class="room">
      <div class="main">
        <div class="header">
          <div class="room-name">
            <hr class="dotted-double" />
            <h1 class="wide color-change">{state.room.code}</h1>
            <hr class="dotted-double" />
          </div>
          <Show when={allUsersAreReady()}>
            <CountDown from={3} callback={startGame} />
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
        <div class="footer-buttons">
          <CircleButton
            label={iAmReady() ? "Unready" : "Ready"}
            onClick={toggleReady}
            color="red"
          />
          <CircleButton label="Leave" onClick={leaveRoom} />
        </div>
        <div class="deck-selected">
          <button
            class="deck-selector button"
            onClick={() => modal.open(MODAL_NAMES.DECK_MANAGE)}
          >
            <div class="deck-selected-label">Deck Selected:</div>
            <div class="deck-selected-name white">
              <span class="glow">[</span>
              {deckBuilder.selected()?.name || "Random Deck"}
              <span class="glow">]</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Room;
