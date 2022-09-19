import useStore from "../../store";
import CardBack from "../../assets/card-back-small.png";
import "./CardPile.scss";

function CardPile(props) {
  let cardPileRef;
  const { sendMessage } = useStore();

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
        destination: props.name,
      },
    });
  };

  const label = () => {
    switch (props.name) {
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
      class={`card-pile ${props.name}${props.opponent ? " opponent" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div class="card-pile-label">{label()}</div>
      <div class="card-back">
        <div class="card-count white">{props.cards.length}</div>
        <img class={props.cards.length === 0 ? "empty" : ""} src={CardBack} />
      </div>
    </div>
  );
}
export default CardPile;
