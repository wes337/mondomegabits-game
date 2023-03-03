import MODAL_NAMES from "../../constants/modal";
import useModal from "../../hooks/useModal";
import CardFocus from "../card/CardFocus";
import CircleButton from "../shared/CircleButton";
import Chat from "../shared/Chat";
import "./RightSideBar.scss";
import useGameControls from "../../hooks/useGameControls";

function RightSideBar() {
  const gameControls = useGameControls();
  const modal = useModal();

  const leaveGame = () => {
    modal.open(MODAL_NAMES.CONFIRM, {
      header: "Leave game?",
      body: "Are you sure you want to leave the game?",
      confirm: "Leave",
      cancel: "Stay",
      callback: () => gameControls.leaveGame(),
    });
  };

  return (
    <div class="right-side-bar grunge">
      <div class="options">
        <CircleButton
          id="leave-game-button"
          label="Leave"
          onClick={leaveGame}
          color="red"
          small
        />
      </div>
      <CardFocus />
      <div class="game-chat">
        <Chat small />
      </div>
    </div>
  );
}

export default RightSideBar;
