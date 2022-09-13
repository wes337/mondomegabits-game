import { createMemo, For } from "solid-js";
import useStore from "../../store";
import Card from "../card/Card";
import "./Hand.scss";

function Hand(props) {
  const { state } = useStore();

  const hand = createMemo(() => {
    const puppetMaster = state.game.puppetMasters.find(({ id }) => {
      if (props.opponent) {
        return id !== state.user.id;
      }
      return id === state.user.id;
    });

    return puppetMaster?.hand || [];
  });

  return (
    <div class={`hand${props.opponent ? " opponent" : ""}`}>
      <For each={hand()}>
        {(card) => (
          <Card
            card={card}
            faceDown={props.opponent}
            opponent={props.opponent}
            location="hand"
          />
        )}
      </For>
    </div>
  );
}

export default Hand;
