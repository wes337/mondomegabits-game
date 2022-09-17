import { createMemo, Show } from "solid-js";
import CardBackLarge from "../../assets/card-back-large.png";
import { generateKey, getCardImageById } from "../../utils";
import useStore from "../../store";
import "./CardSpotlight.scss";

function CardSpotlight() {
  const { state, setState } = useStore();
  const card = createMemo(() => state.focus.spotlight);
  const inDeckBuilder = createMemo(() => state.deck.open);
  const cardUuid = createMemo(() => card()?.uuid || generateKey());
  const cardImg = createMemo(() =>
    card() ? getCardImageById(card().id) : CardBackLarge
  );

  const closeSpotlight = () => {
    setState((state) => ({
      focus: {
        ...state.focus,
        spotlight: null,
      },
    }));
  };

  const onPointerMove = (event) => {
    const transformAmount = 5;
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const centerX = event.target.offsetLeft + event.target.clientWidth / 2;
    const centerY = event.target.offsetTop + event.target.clientHeight / 2;

    const percentX = (mouseX - centerX) / (event.target.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (event.target.clientHeight / 2));

    event.target.style.transform =
      "perspective(400px) rotateY(" +
      percentX * transformAmount +
      "deg) rotateX(" +
      percentY * transformAmount +
      "deg)";
  };

  const onPointerEnter = (event) => {
    setTimeout(() => {
      event.target.style.transition = "";
    }, 100);
    event.target.style.transition = "transform 0.1s";
  };

  const onPointerLeave = (event) => {
    event.target.style.transition = "transform 0.1s";
    setTimeout(() => {
      event.target.style.transition = "";
    }, 100);

    event.target.style.transform =
      "perspective(400px) rotateY(0deg) rotateX(0deg)";
  };

  const getClassName = () => {
    let className = "card-spotlight";

    if (card()) {
      className += " show";
    }

    if (inDeckBuilder()) {
      className += " in-deck-builder";
    }

    return className;
  };

  return (
    <div class={getClassName()} onClick={closeSpotlight}>
      <img
        id={`${cardUuid()}-spotlight`}
        src={cardImg()}
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
    </div>
  );
}

export default CardSpotlight;
