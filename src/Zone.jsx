import { createMemo } from "solid-js";
import { hyphenToCamelCase } from "./utils";
import useStore from "./store";
import Card from "./Card";
import "./Zone.scss";

function Zone({ name, opponent }) {
  let zoneRef;
  const { state, sendMessage } = useStore();

  const cardsInZone = createMemo(() => {
    const puppetMaster = state.game.puppetMasters.find((puppetMaster) =>
      opponent
        ? puppetMaster.id !== state.user.id
        : puppetMaster.id === state.user.id
    );
    const zoneKey = hyphenToCamelCase(name);
    const cards = puppetMaster.board[zoneKey];

    return cards || [];
  });

  const onDragOver = (event) => {
    if (opponent) {
      return;
    }

    event.preventDefault();
    zoneRef.classList.add("drag-over");
  };

  const onDragLeave = () => {
    if (opponent) {
      return;
    }

    zoneRef.classList.remove("drag-over");
  };

  const onDrop = (event) => {
    if (opponent) {
      return;
    }

    event.preventDefault();

    zoneRef.classList.remove("drag-over");
    const cardUuid = event.dataTransfer.getData("text");

    sendMessage({
      type: "play",
      params: {
        cardUuid,
        destination: name,
        gameCode: state.game.id,
        roomCode: state.room.code,
      },
    });
  };

  return (
    <div
      ref={zoneRef}
      class={`zone panel grunge ${name}${opponent ? " opponent" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {cardsInZone().map((card) => (
        <Card card={card} opponent={opponent} location={name} />
      ))}
    </div>
  );
}

export default Zone;
