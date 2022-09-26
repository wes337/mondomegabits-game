import { onCleanup, onMount, Show } from "solid-js";
import useStore from "../../store";
import useKeyboard from "../../hooks/useKeyboard";
import useTutorial from "../../hooks/useTutorial";
import CardSpotlight from "../card/CardSpotlight";
import CardTarget from "../card/CardTarget";
import Tutorial from "../tutorial/Tutorial";
import GameHeader from "./GameHeader";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import MainBoard from "./MainBoard";
import GameFooter from "./GameFooter";
import "./GameBoard.scss";

function GameBoard() {
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
    const keyboardControls = keyboard.controls();
    document.addEventListener("keydown", keyboardControls);
  });

  onCleanup(() => {
    const keyboardControls = keyboard.controls();
    document.removeEventListener("keydown", keyboardControls);
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
      <Show when={tutorial.started()}>
        <Tutorial />
      </Show>
    </>
  );
}

export default GameBoard;
