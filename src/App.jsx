import {
  createSignal,
  createMemo,
  onMount,
  onCleanup,
  Switch,
  Match,
} from "solid-js";
import { isMobileDevice } from "./utils";
import useStore from "./store";
import Connect from "./components/layout/Connect";
import Lobby from "./components/layout/Lobby";
import Room from "./components/layout/Room";
import GameBoard from "./components/game/GameBoard";
import DeckBuilder from "./components/layout/DeckBuilder";
import "./App.scss";

function App() {
  const isMobile = isMobileDevice();
  const { state } = useStore();
  const [deviceIsInPortrait, setDeviceIsInPortrait] = createSignal(
    isMobile && !!screen?.orientation?.type?.match?.("portrait")
  );

  const updateOrientation = () => {
    setDeviceIsInPortrait(
      isMobile && !!screen?.orientation?.type?.match?.("portrait")
    );
  };

  onMount(() => {
    if (isMobile && screen.orientation) {
      screen.orientation.onchange = updateOrientation;
    }
  });

  onCleanup(() => {
    if (isMobile && screen.orientation) {
      screen.orientation.onchange = null;
    }
  });

  const screenToShow = createMemo(() => {
    const inDeckBuilder = state.deck.open;
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
      <div class={`app${deviceIsInPortrait() ? " hide" : ""}`}>
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
      </div>
      <div class={`orientation${deviceIsInPortrait() ? " show" : ""}`}>
        <img src="images/icons/mobile.svg" width={64} height={64} />
        <h3>Please turn your device sideways to landscape mode.</h3>
      </div>
    </>
  );
}

export default App;
