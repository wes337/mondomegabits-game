import { Show, createMemo } from "solid-js";
import MODAL_NAMES from "../../constants/modal";
import CardBack from "../../assets/card-back-small.png";
import useCardSpotlight from "../../hooks/useCardSpotlight";
import { getCardFileStemById, getCardImageById } from "../../utils";
import useStore from "../../store";
import useModal from "../../hooks/useModal";
import useGameControls from "../../hooks/useGameControls";
import "./Card.scss";

function Card(props) {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();
  const cardSpotlight = useCardSpotlight();
  const gameControls = useGameControls();

  const cardIsOnBoard = createMemo(() =>
    ["active-zone", "the-think-tank"].includes(props.location)
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
    gameControls.targetCard(target.from, target.to);
  };

  const tapOrUntapCard = () => {
    if (props.opponent) {
      return;
    }

    gameControls.tapOrUntapCard(props.card.uuid);
  };

  const onDragStart = (event) => {
    if (props.opponent) {
      return;
    }
    focusOnCard();

    const img = new Image();
    img.src = getCardImageById(props.card.id);

    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = 169;
    ctx.canvas.height = img.height * (169 / img.width);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    event.dataTransfer.setDragImage(ctx.canvas, 0, 0);
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

    const video = document.getElementById(props.card.uuid);
    video.muted = false;
    video.volume = 1;
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

    const video = document.getElementById(props.card.uuid);
    video.muted = true;
    video.volume = 0;
  };

  const handleDoubleClick = () => {
    if (cardIsOnBoard()) {
      tapOrUntapCard();
    } else if (cardIsInHand()) {
      gameControls.moveCard(props.card.uuid, "active-zone");
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

  const editCardNotes = (event) => {
    event.stopPropagation();
    modal.open(MODAL_NAMES.CARD_NOTES, { card: props.card });
  };

  const flipCard = (event) => {
    event.stopPropagation();
    sendMessage({
      type: "flip-card",
      params: {
        cardUuid: props.card.uuid,
      },
    });
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
        <Show when={cardIsOnBoard()}>
          <button class="card-action-button flip-button" onClick={flipCard}>
            ↴
          </button>
        </Show>
        <Show when={cardIsOnBoard()}>
          <button
            class="card-action-button edit-button"
            onClick={editCardNotes}
          >
            <img src="./images/icons/edit.svg" width={12} height={12} />
          </button>
        </Show>
      </div>

      {faceDown() ? (
        <img id={props.card.uuid} class="card-img" src={CardBack} />
      ) : (
        <>
          <video
            id={props.card.uuid}
            class="card-img"
            autoPlay={true}
            muted={true}
            loop={true}
            width={169}
            height={284}
            src={`./cards/small/${getCardFileStemById(props.card.id)}.mp4`}
          />
          <img class="card-drag" src={getCardImageById(props.card.id)} />
        </>
      )}
    </div>
  );
}

export default Card;
