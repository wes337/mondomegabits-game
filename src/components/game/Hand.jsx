import { createMemo, For } from "solid-js";
import useStore from "../../store";
import Card from "../card/Card";
import "./Hand.scss";

function Hand({ opponent }) {
  const { state } = useStore();

  const myHand = createMemo(
    () => state.game.puppetMasters.find(({ id }) => id === state.user.id)?.hand
  );

  const opponentHand = createMemo(
    () => state.game.puppetMasters.find(({ id }) => id !== state.user.id)?.hand
  );

  return (
    <div class={`hand${opponent ? " opponent" : ""}`}>
      <For each={opponent ? opponentHand() : myHand()}>
        {(card) => (
          <Card
            card={card}
            faceDown={opponent}
            opponent={opponent}
            location="hand"
          />
        )}
      </For>
    </div>
  );
}

export default Hand;
