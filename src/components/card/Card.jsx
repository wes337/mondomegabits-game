import { Show, createMemo } from "solid-js";
import CardBack from "../../assets/card-back-small.png";
import useCardSpotlight from "../../hooks/useCardSpotlight";
import { getCardImageById } from "../../utils";
import useStore from "../../store";
import "./Card.scss";

function Card(props) {
  const { state, setState, sendMessage } = useStore();
  const cardSpotlight = useCardSpotlight();
  const cardIsOnBoard = createMemo(() =>
    ["battle-zone", "the-think-tank", "buffer-zone"].includes(props.location)
  );
  const cardIsInHand = createMemo(() =>
    ["look-hand", "stowed-hand"].includes(props.location)
  );
  const faceDown = createMemo(
    () => (cardIsInHand() && props.opponent) || props.card.faceDown
  );
  const canSpotlight = createMemo(
    () => !cardIsInHand() && !(faceDown() && props.opponent)
  );
  const canTargetFrom = createMemo(() => !props.opponent && !cardIsInHand());

  const setTargetFromCard = (event) => {
    if (!canTargetFrom()) {
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
    const targetedSelf = state.target.from === props.card.uuid;

    const target = {
      from: targetedSelf ? null : state.target.from,
      to: targetedSelf ? null : props.card.uuid,
    };

    setState({ target });
    sendMessage({
      type: "target",
      params: {
        target,
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
    focusOnCard();
    event.dataTransfer.setData("text", props.card.uuid);
  };

  const focusOnCard = () => {
    if (props.opponent && faceDown()) {
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
    if (props.opponent && faceDown()) {
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
    if (props.opponent && faceDown()) {
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
    if (props.opponent && faceDown()) {
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

  const spotlightCard = (event) => {
    event.stopPropagation();
    cardSpotlight.open(props.card);
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
        <Show when={canSpotlight()}>
          <button class="card-action-button" onClick={spotlightCard}>
            ⇱
          </button>
        </Show>
        <Show when={canTargetFrom()}>
          <button class="card-action-button" onClick={setTargetFromCard}>
            ⌖
          </button>
        </Show>
      </div>
      <img
        id={props.card.uuid}
        src={faceDown() ? CardBack : getCardImageById(props.card.id)}
      />
    </div>
  );
}

export default Card;
