import { createMemo, createEffect, Show } from "solid-js";
import { getCardImageById, hyphenToCamelCase } from "../../utils";
import useStore from "../../store";
import Card from "../card/Card";
import "./SideZone.scss";

function SideZone(props) {
  let sizeZoneRef;
  const { state, sendMessage } = useStore();

  const me = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id === state.user.id)
  );

  const opponent = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id !== state.user.id)
  );

  const card = createMemo(() => {
    if (props.opponent) {
      return opponent()?.[hyphenToCamelCase(props.name)] || null;
    }
    return me()?.[hyphenToCamelCase(props.name)] || null;
  });

  createEffect(() => {
    if (!props.setBackground) {
      return;
    }

    if (card()) {
      const locationImage = getCardImageById(card().id);
      sizeZoneRef.style.backgroundImage = `url("${locationImage}")`;
      sizeZoneRef.style.backgroundRepeat = "no-repeat";
      sizeZoneRef.style.backgroundPosition = "50% 15%";
      sizeZoneRef.style.backgroundSize = "300%";
      sizeZoneRef.style.backgroundBlendMode = "luminosity";
    } else {
      sizeZoneRef.style.backgroundImage = `none`;
    }
  });

  const onDragOver = (event) => {
    event.preventDefault();
    sizeZoneRef.classList.add("drag-over");
  };

  const onDragLeave = () => {
    sizeZoneRef.classList.remove("drag-over");
  };

  const onDrop = (event) => {
    event.preventDefault();

    sizeZoneRef.classList.remove("drag-over");
    const cardUuid = event.dataTransfer.getData("text");

    sendMessage({
      type: "play",
      params: {
        cardUuid,
        destination: props.name,
      },
    });
  };

  const getClassName = () => {
    let className = "side-zone";
    if (card()) {
      className += " filled";
    }

    if (props.opponent) {
      className += " opponent";
    }
    return className;
  };

  return (
    <div
      ref={sizeZoneRef}
      class={getClassName()}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <fieldset>
        <legend>{props.name}</legend>
        <Show when={card()}>
          <Card card={card()} location={props.name} opponent={props.opponent} />
        </Show>
      </fieldset>
    </div>
  );
}

export default SideZone;
