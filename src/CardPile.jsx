import useStore from "./store";
import CardBack from "./assets/card-back.png";
import "./CardPile.scss";

function CardPile({ name, cards, opponent, canView }) {
  let cardPileRef;
  const { state, sendMessage } = useStore();

  const onDragOver = (event) => {
    event.preventDefault();
    cardPileRef.classList.add("drag-over");
  };

  const onDragLeave = () => {
    cardPileRef.classList.remove("drag-over");
  };

  const onDrop = (event) => {
    event.preventDefault();

    cardPileRef.classList.remove("drag-over");
    const cardUuid = event.dataTransfer.getData("text");

    sendMessage({
      type: "move",
      params: {
        cardUuid,
        destination: name,
        gameCode: state.game.id,
        roomCode: state.room.code,
      },
    });
  };

  const label = () => {
    switch (name) {
      case "deck":
        return "Deck";
      case "discard-pile":
        return "Discard";
      default:
        return "";
    }
  };

  return (
    <div
      ref={cardPileRef}
      class={`card-pile ${name}${opponent ? " opponent" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div class="card-pile-label">{label()}</div>
      <div class="card-back">
        <div class="card-count">{cards.length}</div>
        <img class={cards.length === 0 ? "empty" : ""} src={CardBack} />
      </div>
    </div>
  );
}
export default CardPile;
