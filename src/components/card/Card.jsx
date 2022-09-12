import { createMemo, Show } from "solid-js";
import { getCardImageById } from "../../utils";
import useStore from "../../store";
import CardBack from "../../assets/card-back.png";
import "./Card.scss";

function Card({ card, opponent, location }) {
  const { state, setState, sendMessage } = useStore();
  const faceDown = (location === "hand" && opponent) || card.faceDown;
  const canExpand = location !== "hand" && !(faceDown && opponent);

  const cardIsOnBoard = createMemo(() =>
    ["battle-zone", "the-think-tank", "buffer-zone"].includes(location)
  );

  const playCard = (destination = "battle-zone") => {
    if (opponent) {
      return;
    }

    sendMessage({
      type: "play",
      params: {
        cardUuid: card.uuid,
        destination,
        gameCode: state.game.id,
        roomCode: state.room.code,
      },
    });
  };

  const tapOrUntapCard = () => {
    if (opponent) {
      return;
    }

    sendMessage({
      type: "tap",
      params: {
        cardUuid: card.uuid,
        gameCode: state.game.id,
        roomCode: state.room.code,
      },
    });
  };

  const onDragStart = (event) => {
    if (opponent) {
      return;
    }
    event.dataTransfer.setData("text", card.uuid);
  };

  const focusOnCard = () => {
    if (opponent && faceDown) {
      return;
    }

    if (state.focus.current?.uuid === card.uuid) {
      removeFocusOnCard();
    } else {
      setState((state) => ({
        focus: {
          ...state.focus,
          current: card,
        },
      }));
    }
  };

  const removeFocusOnCard = () => {
    if (opponent && faceDown) {
      return;
    }

    setState((state) => ({
      focus: {
        ...state.focus,
        current: null,
      },
    }));
  };

  const onPointerEnter = () => {
    if (opponent && faceDown) {
      return;
    }

    setState((state) => ({
      focus: {
        ...state.focus,
        hover: card,
      },
    }));
  };

  const onPointerLeave = () => {
    if (opponent && faceDown) {
      return;
    }

    setState((state) => ({
      focus: {
        ...state.focus,
        hover: null,
      },
    }));
  };

  const handleDoubleClick = () => {
    if (cardIsOnBoard()) {
      tapOrUntapCard();
    }
  };

  const onClick = (event) => {
    const SINGLE_CLICK = 1;
    const DOUBLE_CLICK = 2;

    switch (event.detail) {
      case SINGLE_CLICK:
        focusOnCard();
        break;
      case DOUBLE_CLICK:
        handleDoubleClick();
        break;
    }
  };

  const expandCard = (event) => {
    event.stopPropagation();
    setState((state) => ({
      focus: {
        ...state.focus,
        spotlight: card,
      },
    }));
  };

  const cardClassName = () => {
    let className = "card";

    if (opponent) {
      className += " opponent";
    }

    if (state.focus.current?.uuid === card.uuid) {
      className += " focus";
    }

    if (card.tapped) {
      className += " tapped";
    }

    return className;
  };

  return (
    <div
      class={cardClassName()}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onDragStart={onDragStart}
      draggable
    >
      <Show when={canExpand}>
        <button class="expand-card" onClick={expandCard}>
          ⇱
        </button>
      </Show>
      <img
        id={card.uuid}
        src={faceDown ? CardBack : getCardImageById(card.id)}
      />
    </div>
  );
}

export default Card;
