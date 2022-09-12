import { createMemo, Show } from "solid-js";
import useStore from "./store";
import Connect from "./components/layout/Connect";
import Lobby from "./components/layout/Lobby";
import Room from "./components/layout/Room";
import GameBoard from "./components/game/GameBoard";
import "./App.scss";

function App() {
  const { state } = useStore();

  screen?.orientation?.lock?.("landscape");

  const userIsInLobbyOrRoom = createMemo(
    () =>
      !!state.room || !!state.lobby.find((user) => user.id === state.user.id)
  );

  const renderMain = () => {
    if (state.game) {
      return <GameBoard />;
    }
    if (state.room) {
      return <Room />;
    }

    return <Lobby />;
  };

  return (
    <>
      <div class="app">
        <Show when={userIsInLobbyOrRoom()} fallback={<Connect />}>
          {renderMain()}
        </Show>
      </div>
      <div class="orientation">
        <h3>Please turn your device sideways to landscape mode.</h3>
      </div>
    </>
  );
}

export default App;
