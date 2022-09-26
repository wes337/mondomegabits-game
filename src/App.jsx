import { createMemo, Switch, Match } from "solid-js";
import { isMobileDevice } from "./utils";
import useStore from "./store";
import Connect from "./components/layout/Connect";
// import Lobby from "./components/layout/Lobby";
import Room from "./components/layout/Room";
import GameBoard from "./components/game/GameBoard";
import DeckBuilder from "./components/layout/DeckBuilder";
import Modal from "./components/shared/modals/Modal";
import Snackbar from "./components/shared/Snackbar";
import "./App.scss";
import Menu from "./components/layout/Menu";

function App() {
  const { state } = useStore();

  const screenToShow = createMemo(() => {
    const inDeckBuilder = state.deckBuilderOpen;
    if (inDeckBuilder) {
      return "deck";
    }

    const inLobby = !!state.lobby.find((user) => user.id === state.user.id);
    if (inLobby) {
      return "lobby";
    }

    const inTutorial = !!state.game && state.room?.status === "tutorial";
    if (inTutorial) {
      return "tutorial";
    }

    const inGame = !!state.game;
    if (inGame) {
      return "game";
    }

    const inRoom = !!state.room;
    if (inRoom) {
      return "room";
    }

    return null;
  });

  return (
    <>
      <div class="app">
        <Switch fallback={<Connect />}>
          <Match when={screenToShow() === "deck"}>
            <DeckBuilder />
          </Match>
          <Match when={["game", "tutorial"].includes(screenToShow())}>
            <GameBoard />
          </Match>
          <Match when={screenToShow() === "room"}>
            <Room />
          </Match>
          <Match when={screenToShow() === "lobby"}>
            <Menu />
          </Match>
        </Switch>
        <Modal />
        <Snackbar />
      </div>
      <div class="orientation">
        {isMobileDevice() ? (
          <>
            <img src="images/icons/mobile.svg" width={64} height={64} />
            <h3>Please turn your device sideways to landscape mode.</h3>
          </>
        ) : (
          <>
            Window size is too small!
            <br />
            Please expand this window.
          </>
        )}
      </div>
    </>
  );
}

export default App;
