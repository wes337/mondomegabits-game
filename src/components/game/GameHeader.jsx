import { createMemo, Show } from "solid-js";
import useStore from "../../store";
import Hand from "./Hand";
import "./GameHeader.scss";

function GameHeader() {
  const { state } = useStore();

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);

  return (
    <Show when={!soloPlay()}>
      <div class="game-header grunge">
        <Hand opponent />
      </div>
    </Show>
  );
}

export default GameHeader;
