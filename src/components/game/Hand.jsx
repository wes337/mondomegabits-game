import { createMemo, For } from "solid-js";
import useGameControls from "../../hooks/useGameControls";
import useStore from "../../store";
import Card from "../card/Card";
import "./Hand.scss";

function Hand(props) {
  let handRef;
  const { state } = useStore();
  const gameControls = useGameControls();

  const hand = createMemo(() => {
    const puppetMaster = state.game.puppetMasters.find(({ id }) => {
      if (props.opponent) {
        return id !== state.user.id;
      }
      return id === state.user.id;
    });

    if (props.stowed) {
      return puppetMaster?.stowedHand;
    }

    return puppetMaster?.lookHand;
  });

  const onDragOver = (event) => {
    if (props.opponent) {
      return;
    }

    event.preventDefault();
    handRef.classList.add("drag-over");
  };

  const onDragLeave = () => {
    if (props.opponent) {
      return;
    }

    handRef.classList.remove("drag-over");
  };

  const onDrop = (event) => {
    if (props.opponent) {
      return;
    }

    event.preventDefault();

    handRef.classList.remove("drag-over");
    const cardUuid = event.dataTransfer.getData("text");

    gameControls.moveCard(cardUuid, props.stowed ? "stowed-hand" : "look-hand");
  };

  const getClassName = () => {
    let className = "hand";

    if (props.stowed) {
      className += " stowed";
    }

    if (props.opponent) {
      className += " opponent";
    }

    return className;
  };

  return (
    <fieldset
      ref={handRef}
      class={getClassName()}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <legend>
        {props.stowed ? "Stowed" : "Look"}
        <div class="count">
          <span class="yellow">┋</span>
          {hand().length}
        </div>
      </legend>
      <For each={hand()}>
        {(card) => (
          <Card
            card={card}
            faceDown={props.opponent}
            opponent={props.opponent}
            location={props.stowed ? "stowed-hand" : "look-hand"}
          />
        )}
      </For>
    </fieldset>
  );
}

export default Hand;
