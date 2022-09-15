import Hand from "./Hand";
import "./GameFooter.scss";

function GameFooter() {
  return (
    <div class="game-footer panel grunge">
      <Hand />
      <Hand stowed />
    </div>
  );
}

export default GameFooter;
