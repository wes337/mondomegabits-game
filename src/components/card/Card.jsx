import { Show } from "solid-js";
import { getCardImageById } from "../../utils";
import useStore from "../../store";
import CardBack from "../../assets/card-back.png";
import "./Card.scss";

function Card(props) {
  const { state, setState, sendMessage } = useStore();

  const cardIsOnBoard = [
    "battle-zone",
    "the-think-tank",
    "buffer-zone",
  ].includes(props.location);

  const faceDown =
    (props.location === "hand" && props.opponent) || props.card.faceDown;
  const canExpand = props.location !== "hand" && !(faceDown && props.opponent);
  const canTargetFrom = !props.opponent && props.location !== "hand";

  const setTargetFromCard = (event) => {
    if (!canTargetFrom) {
      return;
    }

    event.stopPropagation();

    setState({
      target: {
        from: props.card.uuid,
        to: null,
      },
    });
  };

  const setTargetToCard = () => {
    setState((state) => ({
      target: {
        ...state.target,
        to: props.card.uuid,
      },
    }));

    sendMessage({
      type: "target",
      params: {
        target: {
          from: state.target.from,
          to: props.card.uuid,
        },
      },
    });
  };

  const tapOrUntapCard = () => {
    if (props.opponent) {
      return;
    }

    sendMessage({
      type: "tap",
      params: {
        cardUuid: props.card.uuid,
      },
    });
  };

  const onDragStart = (event) => {
    if (props.opponent) {
      return;
    }
    event.dataTransfer.setData("text", props.card.uuid);
  };

  const focusOnCard = () => {
    if (props.opponent && faceDown) {
      return;
    }

    if (state.focus.current?.uuid === props.card.uuid) {
      removeFocusOnCard();
    } else {
      setState((state) => ({
        focus: {
          ...state.focus,
          current: props.card,
        },
      }));
    }
  };

  const removeFocusOnCard = () => {
    if (props.opponent && faceDown) {
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
    if (props.opponent && faceDown) {
      return;
    }

    setState((state) => ({
      focus: {
        ...state.focus,
        hover: props.card,
      },
    }));
  };

  const onPointerLeave = () => {
    if (props.opponent && faceDown) {
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
    if (cardIsOnBoard) {
      tapOrUntapCard();
    }
  };

  const onClick = (event) => {
    const SINGLE_CLICK = 1;
    const DOUBLE_CLICK = 2;

    switch (event.detail) {
      case SINGLE_CLICK: {
        const isChoosingCardToTarget = state.target.from && !state.target.to;
        if (isChoosingCardToTarget) {
          setTargetToCard();
        }
        focusOnCard();
        break;
      }
      case DOUBLE_CLICK: {
        handleDoubleClick();
        break;
      }
    }
  };

  const expandCard = (event) => {
    event.stopPropagation();
    setState((state) => ({
      focus: {
        ...state.focus,
        spotlight: props.card,
      },
    }));
  };

  const cardClassName = () => {
    let className = "card";

    if (props.opponent) {
      className += " opponent";
    }

    if (state.focus.current?.uuid === props.card.uuid) {
      className += " focus";
    }

    if (props.card.tapped) {
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
      <div class="card-actions">
        <Show when={canExpand}>
          <button class="card-action-button" onClick={expandCard}>
            ⇱
          </button>
        </Show>
        <Show when={canTargetFrom}>
          <button class="card-action-button" onClick={setTargetFromCard}>
            ⌖
          </button>
        </Show>
      </div>
      <img
        id={props.card.uuid}
        src={faceDown ? CardBack : getCardImageById(props.card.id)}
      />
    </div>
  );
}

export default Card;
