import { createMemo, Show } from "solid-js";
import CardBackLarge from "../../assets/card-back-large.png";
import { generateKey } from "../../utils";
import useStore from "../../store";
import useCardSpotlight from "../../hooks/useCardSpotlight";
import "./CardSpotlight.scss";

function CardSpotlight() {
  const { state } = useStore();
  const cardSpotlight = useCardSpotlight();
  const card = createMemo(() => state.focus.spotlight);
  const inDeckBuilder = createMemo(() => state.deckBuilderOpen);
  const cardUuid = createMemo(() => card()?.uuid || generateKey());

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

  const onKeyDown = () => {
    cardSpotlight.close();
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
    <div
      class={getClassName()}
      onClick={cardSpotlight.close}
      onKeyDown={onKeyDown}
    >
      <Show
        when={card()}
        fallback={<img id={`${cardUuid()}-spotlight`} src={CardBackLarge} />}
      >
        <video
          id={`${cardUuid()}-spotlight`}
          autoPlay={true}
          muted={false}
          loop={true}
          onPointerMove={onPointerMove}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <source src={`./cards/full/${card().fileStem}.mp4`} />
        </video>
      </Show>
    </div>
  );
}

export default CardSpotlight;
