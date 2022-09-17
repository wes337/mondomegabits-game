import { createMemo, For, onCleanup } from "solid-js";
import useCardSpotlight from "../../hooks/useCardSpotlight";
import useStore from "../../store";
import "./DisplayCard.scss";

function DisplayCard(props) {
  let spotlightCard;
  const { state, setState } = useStore();
  const cardSpotlight = useCardSpotlight();
  const canAddToDeck = createMemo(
    () =>
      state.deck.cards.filter((card) => card.id === props.card.id).length < 3
  );

  const addToOrRemoveFromDeck = () => {
    if (props.card.inDeck) {
      const cards = [...state.deck.cards];
      const index = cards.findIndex((card) => card.id === props.card.id);
      cards.splice(index, 1);
      setState((state) => ({
        deck: {
          ...state.deck,
          cards,
        },
      }));
    } else if (canAddToDeck()) {
      setState((state) => ({
        deck: {
          ...state.deck,
          cards: [...state.deck.cards, { ...props.card, inDeck: true }],
        },
      }));
    }
  };

  const onClick = (event) => {
    const SINGLE_CLICK = 1;
    const DOUBLE_CLICK = 2;
    switch (event.detail) {
      case SINGLE_CLICK: {
        removeCardFromSpotlight();
        break;
      }
      case DOUBLE_CLICK: {
        addToOrRemoveFromDeck();
        break;
      }
      default: {
        addToOrRemoveFromDeck();
        break;
      }
    }
  };

  const onTouchStart = () => {
    removeCardFromSpotlight();
    addToOrRemoveFromDeck();
  };

  const addCardToSpotlight = () => {
    spotlightCard = setTimeout(() => {
      cardSpotlight.open(props.card);
    }, 500);
  };

  const removeCardFromSpotlight = () => {
    clearTimeout(spotlightCard);
    cardSpotlight.close();
  };

  onCleanup(() => {
    clearTimeout(spotlightCard);
  });

  const getClassName = () => {
    let className = "display-card";

    if (props.card.inDeck) {
      className += " in-deck";
    }

    if (!props.card.inDeck && !canAddToDeck()) {
      className += " no-add";
    }

    return className;
  };

  return (
    <div
      class={getClassName()}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onPointerEnter={addCardToSpotlight}
      onPointerLeave={removeCardFromSpotlight}
    >
      <img
        id={props.card.id}
        src={`images/cards/${props.card.fileStem}.jpg`}
        width="169"
        height="284"
      />
      <Show when={props.stackSize > 1}>
        <div class="card-stack">
          <For each={[...Array(props.stackSize - 1)]}>
            {(_, i) => {
              const offset = 15 * (i() + 1);
              return (
                <img
                  id={`${props.card.id}-${i()}`}
                  src={`images/cards/${props.card.fileStem}.jpg`}
                  width="169"
                  height="284"
                  style={`transform: translateY(${offset}px); z-index: ${-i()}`}
                />
              );
            }}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default DisplayCard;
