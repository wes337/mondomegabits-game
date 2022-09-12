import { Show } from "solid-js";
import useStore from "../../store";
import CardFocus from "../card/CardFocus";
import CircleButton from "../shared/CircleButton";
import Chat from "../shared/Chat";
import "./RightSideBar.scss";

function RightSideBar() {
  const { state, setState, sendMessage } = useStore();

  const leaveGame = () => {
    sendMessage({
      type: "leave-game",
    });
  };

  return (
    <div
      class={`right-side-bar grunge${
        state.chatExpanded ? " chat-expanded" : ""
      }`}
    >
      <div class="options">
        <CircleButton label="Leave" onClick={leaveGame} small />
      </div>
      <CardFocus />
      <div class="game-chat">
        <button
          class="expand-button button"
          onClick={() => setState({ chatExpanded: !state.chatExpanded })}
        >
          {state.chatExpanded ? "Hide Chat" : "Show Chat"}
        </button>
        <Show when={state.chatExpanded}>
          <Chat />
        </Show>
      </div>
    </div>
  );
}

export default RightSideBar;
