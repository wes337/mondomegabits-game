import { createMemo } from "solid-js";
import useStore from "../../store";
import CardFocus from "../card/CardFocus";
import CardPile from "../card/CardPile";
import CircleButton from "../shared/CircleButton";
import Chat from "../shared/Chat";
import Plasma from "../shared/Plasma";
import Hand from "./Hand";
import Zone from "./Zone";
import "./GameBoard.scss";
import LeftSideBar from "./LeftSideBar";

function GameBoard() {
  let mainRef;
  const { state, setState, sendMessage } = useStore();

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);

  const leaveGame = () => {
    sendMessage({
      type: "leave-game",
    });
  };

  const onClick = (event) => {
    // Remove focus from cards when clicking
    // something else inside the main board
    const clickedAnotherElementInsideMainBoard =
      event.target.id !== state.focus.current?.uuid &&
      mainRef.contains(event.target);

    if (clickedAnotherElementInsideMainBoard) {
      setState((state) => ({
        focus: {
          ...state.focus,
          current: null,
        },
      }));
    }
  };

  return (
    <div class="game-board" onClick={onClick}>
      <Show when={!soloPlay()}>
        <div class="header grunge">
          <Hand opponent />
        </div>
      </Show>
      <LeftSideBar />
      <div ref={mainRef} class={`main${soloPlay() ? " solo-play" : ""}`}>
        <Show when={!soloPlay()}>
          <Zone name="the-think-tank" opponent />
          <Zone name="buffer-zone" opponent />
          <Zone name="battle-zone" opponent />
          <div class="middle grunge">
            <Plasma />
          </div>
        </Show>
        <Zone name="battle-zone" />
        <Zone name="buffer-zone" />
        <Zone name="the-think-tank" />
      </div>
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
      <div class="footer panel grunge">
        <Hand />
      </div>
    </div>
  );
}

export default GameBoard;
