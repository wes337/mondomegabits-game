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
      <Show when={!soloPlay()}>
        <Zone name="the-think-tank" opponent />
        <Zone name="buffer-zone" opponent />
        <Zone name="battle-zone" opponent />
        <div class="middle grunge">
          <Plasma />
        </div>
      </Show>
      <Zone name="battle-zone" />
      <Zone name="buffer-zone" />
      <Zone name="the-think-tank" />
    </div>
  );
}

export default MainBoard;
