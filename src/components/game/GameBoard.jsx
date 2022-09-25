import { onCleanup, onMount, createEffect, Show } from "solid-js";
import useStore from "../../store";
import useKeyboard from "../../hooks/useKeyboard";
import CardSpotlight from "../card/CardSpotlight";
import CardTarget from "../card/CardTarget";
import GameHeader from "./GameHeader";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import MainBoard from "./MainBoard";
import GameFooter from "./GameFooter";
import Tooltip from "../shared/Tooltip";
import useTutorial from "../../hooks/useTutorial";
import "./GameBoard.scss";

function GameBoard(props) {
  let mainBoardRef;
  const keyboard = useKeyboard();
  const tutorial = useTutorial();
  const { state, setState } = useStore();

  const onClick = (event) => {
    // Remove focus from cards when clicking
    // something else inside the main board

    const mainBoard = document.querySelector(".main-board");

    const clickedAnotherElementInsideMainBoard =
      event.target.id !== state.focus.current?.uuid &&
      mainBoard.contains(event.target);

    if (clickedAnotherElementInsideMainBoard) {
      setState((state) => ({
        focus: {
          ...state.focus,
          current: null,
        },
      }));
    }
  };

  onMount(() => {
    if (props.isTutorial) {
      document.addEventListener("keydown", keyboard.tutorialControls);
      tutorial.reset();
    } else {
      document.addEventListener("keydown", keyboard.controls);
    }
  });

  onCleanup(() => {
    if (props.isTutorial) {
      document.removeEventListener("keydown", keyboard.tutorialControls);
    } else {
      document.removeEventListener("keydown", keyboard.controls);
    }
  });

  createEffect(() => {
    if (tutorial.started() && tutorial.current()) {
      tutorial.current().effect?.();
    }
  });

  return (
    <>
      <div class="game-board" onClick={onClick}>
        <GameHeader />
        <LeftSideBar />
        <MainBoard ref={mainBoardRef} />
        <RightSideBar />
        <GameFooter />
      </div>
      <CardSpotlight />
      <CardTarget />
      <Show when={tutorial.started() && tutorial.current()}>
        <Tooltip
          position={tutorial.current().position?.()}
          placement={tutorial.current().placement}
        >
          {tutorial.number()}
          {tutorial.current().content}
          <Show when={tutorial.current().showNextButton}>
            <button
              class="button tooltip-button"
              onClick={() => {
                if (tutorial.number() === 16) {
                  tutorial.end();
                } else {
                  tutorial.next();
                }
              }}
            >
              Next
            </button>
          </Show>
        </Tooltip>
      </Show>
    </>
  );
}

export default GameBoard;
