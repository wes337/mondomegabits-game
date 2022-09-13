import { createMemo, Show } from "solid-js";
import useStore from "./store";
import Connect from "./components/layout/Connect";
import Lobby from "./components/layout/Lobby";
import Room from "./components/layout/Room";
import GameBoard from "./components/game/GameBoard";
import CardTarget from "./components/card/CardTarget";
import "./App.scss";

function App() {
  const { state } = useStore();

  screen?.orientation?.lock?.("landscape");

  const userIsInLobbyOrRoom = createMemo(
    () =>
      !!state.room || !!state.lobby.find((user) => user.id === state.user.id)
  );

  return (
    <>
      <div class="app">
        <Show when={userIsInLobbyOrRoom()} fallback={<Connect />}>
          <Show when={state.game}>
            <GameBoard />
          </Show>
          <Show when={state.room && !state.game}>
            <Room />
          </Show>
          <Show when={!state.room && !state.game}>
            <Lobby />
          </Show>
        </Show>
        {/* <CardTarget /> */}
      </div>
      <div class="orientation">
        <h3>Please turn your device sideways to landscape mode.</h3>
      </div>
    </>
  );
}

export default App;
