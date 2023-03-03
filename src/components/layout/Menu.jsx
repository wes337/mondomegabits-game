import useStore from "../../store";
import MODAL_NAMES from "../../constants/modal";
import useModal from "../../hooks/useModal";
import CircleButton from "../shared/CircleButton";
import useTutorial from "../../hooks/useTutorial";
import "./Menu.scss";

function Menu() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();
  const tutorial = useTutorial();

  const createRoom = () => {
    sendMessage({ type: "create" });
  };

  const openDeckBuilder = () => {
    setState({
      deckBuilderOpen: true,
    });
  };

  const startTutorial = () => {
    tutorial.reset();
    sendMessage({
      type: "create",
      params: {
        tutorial: true,
      },
    });
  };

  const joinGame = () => {
    modal.open(MODAL_NAMES.ROOM_FIND);
  };

  return (
    <div class="menu">
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
        <CircleButton label="Join Game" onClick={joinGame} color="red" />
        <CircleButton
          label="Deck Builder"
          color="teal"
          onClick={openDeckBuilder}
        />
        <CircleButton label="Tutorial" onClick={startTutorial} color="pink" />
      </div>
    </div>
  );
}

export default Menu;
