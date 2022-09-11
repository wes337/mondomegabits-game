import { createSignal, createMemo, For } from "solid-js";
import useStore from "./store";
import { getCardImageById } from "./utils";
import CardBack from "./assets/card-back-upside.png";
import "./OpponentHand.scss";
import Card from "./Card";

function OpponentHand() {
  const { state, setState } = useStore();

  const opponent = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id !== state.user.id)
  );

  return (
    <div class="opponent-hand">
      <For each={opponent().hand}>
        {(card) => {
          return <Card card={card} location="hand" />;
        }}
      </For>
    </div>
  );
}

export default OpponentHand;
