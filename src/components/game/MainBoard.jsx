import { createMemo, Show } from "solid-js";
import useStore from "../../store";
import Plasma from "../shared/Plasma";
import Zone from "./Zone";
import "./MainBoard.scss";
import SideZone from "./SideZone";

function MainBoard() {
  const { state } = useStore();

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);

  const opponentLocation = createMemo(
    () => state.game.location?.owner !== state.user.id
  );

  return (
    <div class={`main-board ${soloPlay() ? " solo-play" : ""}`}>
      <div class="main-board-left">
        <Show when={!soloPlay()}>
          <Zone name="active-zone" opponent />
          <div class="main-board-separator grunge">
            <Plasma />
          </div>
        </Show>
        <Zone name="active-zone" />
      </div>
      <div class="main-board-right panel light-grunge">
        <Show when={!soloPlay()}>
          <SideZone name="the-think-tank" opponent />
        </Show>
        <SideZone name="location" opponent={opponentLocation()} setBackground />
        <SideZone name="the-think-tank" />
      </div>
    </div>
  );
}

export default MainBoard;
