import { createMemo } from "solid-js";
import useStore from "../../store";
import Plasma from "../shared/Plasma";
import Zone from "./Zone";
import "./MainBoard.scss";

function MainBoard() {
  const { state } = useStore();

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);

  return (
    <div class={`main-board ${soloPlay() ? " solo-play" : ""}`}>
      <div class="main-board-left">
        <Show when={!soloPlay()}>
          <Zone name="the-think-tank" opponent />
          <Zone name="battle-zone" opponent />
          <div class="main-board-separator grunge">
            <Plasma />
          </div>
        </Show>
        <Zone name="battle-zone" />
        <Zone name="the-think-tank" />
      </div>
      <div class="main-board-right panel light-grunge">
        <div class="location-card">
          <fieldset>
            <legend>Location</legend>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
