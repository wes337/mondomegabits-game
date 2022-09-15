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
        <CircleButton
          label={state.chatExpanded ? "Hide Chat" : "Show Chat"}
          onClick={() => setState({ chatExpanded: !state.chatExpanded })}
          small
        />
        <CircleButton label="Leave" onClick={leaveGame} color="red" small />
      </div>
      <CardFocus />
      <div class="game-chat">
        <Show when={state.chatExpanded}>
          <Chat small />
        </Show>
      </div>
    </div>
  );
}

export default RightSideBar;
