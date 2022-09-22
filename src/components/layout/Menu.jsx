import useStore from "../../store";
import MODAL_NAMES from "../../constants/modal";
import useModal from "../../hooks/useModal";
import CircleButton from "../shared/CircleButton";
import "./Menu.scss";

function Menu() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();

  const createRoom = () => {
    sendMessage({ type: "create" });
  };

  const openDeckBuilder = () => {
    setState({
      deckBuilderOpen: true,
    });
  };

  const joinGame = () => {
    modal.open(MODAL_NAMES.ROOM_FIND);
  };

  return (
    <div class="menu">
      <div class="video">
        <video
          autoplay="true"
          loop="true"
          playsinline="true"
          muted
          tabIndex={-1}
        >
          <source
            type='video/mp4; codecs="av01.0.13M.10"'
            src="https://cdn.mondomegabits.com/logo/Mondo flashing logo_r3 - strobe.mp4"
          />
        </video>
      </div>
      <div class="menu-header">
        <div class="puppet-master-name">
          <span class="welcome yellow">Welcome,</span>
          <span class="bracket red">
            {" "}
            <span class="white">{state.user.name}</span>{" "}
          </span>
        </div>
      </div>
      <div class="menu-options panel">
        <CircleButton label="New Game" onClick={createRoom} />
        <CircleButton label="Join Game" onClick={joinGame} />
        <CircleButton
          label="Deck Builder"
          color="teal"
          onClick={openDeckBuilder}
        />
        <CircleButton label="Tutorial" disabled />
      </div>
    </div>
  );
}

export default Menu;
