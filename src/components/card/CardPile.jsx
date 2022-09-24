import CardBack from "../../assets/card-back-small.png";
import useGameControls from "../../hooks/useGameControls";
import "./CardPile.scss";

function CardPile(props) {
  let cardPileRef;
  const gameControls = useGameControls();

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

    gameControls.moveCard(cardUuid, props.name);
  };

  const onClick = (event) => {
    const SINGLE_CLICK = 1;
    const DOUBLE_CLICK = 2;

    switch (event.detail) {
      case SINGLE_CLICK: {
        if (props.name === "deck") {
          gameControls.drawCards(1);
        }
        break;
      }
      case DOUBLE_CLICK: {
        break;
      }
    }
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
      onClick={onClick}
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
