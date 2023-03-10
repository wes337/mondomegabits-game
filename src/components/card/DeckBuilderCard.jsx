import { createMemo, For, Show } from "solid-js";
import useCardSpotlight from "../../hooks/useCardSpotlight";
import useDeckBuilder from "../../hooks/useDeckBuilder";
import "./DeckBuilderCard.scss";

function DeckBuilderCard(props) {
  let spotlightCard;
  const deckBuilder = useDeckBuilder();
  const cardSpotlight = useCardSpotlight();
  const canAddToDeck = createMemo(
    () =>
      deckBuilder.draft().cards.filter((card) => card.id === props.card.id)
        .length < 3
  );

  const onClick = (event) => {
    const SINGLE_CLICK = 1;
    const DOUBLE_CLICK = 2;
    switch (event.detail) {
      case SINGLE_CLICK: {
        removeCardFromSpotlight();
        break;
      }
      case DOUBLE_CLICK: {
        deckBuilder.addOrRemoveCard(props.card);
        break;
      }
      default: {
        deckBuilder.addOrRemoveCard(props.card);
        break;
      }
    }
  };

  const onTouchStart = () => {
    removeCardFromSpotlight();
    deckBuilder.addOrRemoveCard(props.card);
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

  const getClassName = () => {
    let className = "deck-builder-card";

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
      <video
        id={props.card.id}
        width="169"
        height="284"
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={`/cards/small/${props.card.fileStem}.mp4`} />
      </video>
      <Show when={props.stackSize > 1}>
        <div class="card-stack">
          <For each={[...Array(props.stackSize - 1)]}>
            {(_, index) => (
              <img
                id={`${props.card.id}-${index()}`}
                src={`images/cards/${props.card.fileStem}.jpg`}
                width="169"
                height="284"
                style={{
                  transform: `translateY(${15 * (index() + 1)}px)`,
                  "z-index": 0 - index(),
                }}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default DeckBuilderCard;
