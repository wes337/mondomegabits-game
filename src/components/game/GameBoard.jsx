import useStore from "../../store";
import GameHeader from "./GameHeader";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import MainBoard from "./MainBoard";
import GameFooter from "./GameFooter";
import "./GameBoard.scss";
import CardSpotlight from "../card/CardSpotlight";

function GameBoard() {
  const { state, setState } = useStore();

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
    <>
      <div class="game-board" onClick={onClick}>
        <GameHeader />
        <LeftSideBar />
        <MainBoard />
        <RightSideBar />
        <GameFooter />
      </div>
      <CardSpotlight />
    </>
  );
}

export default GameBoard;
