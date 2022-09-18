import useStore from "../../store";
import CardSpotlight from "../card/CardSpotlight";
import CardTarget from "../card/CardTarget";
import GameHeader from "./GameHeader";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import MainBoard from "./MainBoard";
import GameFooter from "./GameFooter";
import "./GameBoard.scss";

function GameBoard() {
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

  return (
    <>
      <div class="game-board" onClick={onClick}>
        <GameHeader />
        <LeftSideBar />
        <MainBoard />
        <RightSideBar />
        <GameFooter />
      </div>
      <CardSpotlight />
      <CardTarget />
    </>
  );
}

export default GameBoard;
