import { createMemo, Show } from "solid-js";
import { getCardImageById } from "../../utils";
import useStore from "../../store";
import "./CardSpotlight.scss";

function CardSpotlight() {
  const { state, setState } = useStore();
  const card = createMemo(() => state.focus.spotlight);

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

  return (
    <Show when={card()}>
      <div class="card-spotlight" onClick={closeSpotlight}>
        <img
          id={`${card().uuid}-spotlight`}
          src={getCardImageById(card().id)}
          onPointerMove={onPointerMove}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        />
      </div>
    </Show>
  );
}

export default CardSpotlight;
