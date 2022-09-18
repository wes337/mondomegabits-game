import { createMemo, Switch, Match } from "solid-js";
import useDeviceOrientation from "./hooks/useDeviceOrientation";
import useStore from "./store";
import Connect from "./components/layout/Connect";
import Lobby from "./components/layout/Lobby";
import Room from "./components/layout/Room";
import GameBoard from "./components/game/GameBoard";
import DeckBuilder from "./components/layout/DeckBuilder";
import Modal from "./components/shared/modals/Modal";
import "./App.scss";

function App() {
  const deviceOrientation = useDeviceOrientation();
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
      <div class={`app${deviceOrientation() === "portrait" ? " hide" : ""}`}>
        <Switch fallback={<Connect />}>
          <Match when={screenToShow() === "deck"}>
            <DeckBuilder />
          </Match>
          <Match when={screenToShow() === "game"}>
            <GameBoard />
          </Match>
          <Match when={screenToShow() === "room"}>
            <Room />
          </Match>
          <Match when={screenToShow() === "lobby"}>
            <Lobby />
          </Match>
        </Switch>
        <Modal />
      </div>
      <div
        class={`orientation${
          deviceOrientation() === "portrait" ? " show" : ""
        }`}
      >
        <img src="images/icons/mobile.svg" width={64} height={64} />
        <h3>Please turn your device sideways to landscape mode.</h3>
      </div>
    </>
  );
}

export default App;
