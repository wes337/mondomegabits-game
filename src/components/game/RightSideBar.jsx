import { Show } from "solid-js";
import MODAL_NAMES from "../../constants/modal";
import useStore from "../../store";
import useModal from "../../hooks/useModal";
import CardFocus from "../card/CardFocus";
import CircleButton from "../shared/CircleButton";
import Chat from "../shared/Chat";
import "./RightSideBar.scss";

function RightSideBar() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();

  const leaveGame = () => {
    modal.open(MODAL_NAMES.CONFIRM, {
      header: "Leave game?",
      body: "Are you sure you want to leave the game?",
      confirm: "Leave",
      cancel: "Stay",
      callback: () => {
        sendMessage({ type: "leave-game" });
      },
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
