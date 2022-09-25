import { createMemo } from "solid-js";
import useStore from "../store";
import useTutorial from "./useTutorial";

function useGameControls() {
  const { state, setState, sendMessage } = useStore();
  const tutorial = useTutorial();

  const me = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id === state.user.id)
  );

  const handleTutorialStep = () => {
    if (!tutorial.started()) {
      return;
    }

    if (tutorial.number() === 1) {
      tutorial.next();
    }

    if (tutorial.number() === 3) {
      if (me().lookHand.length === 4) {
        tutorial.next();
      }
    }

    if (tutorial.number() === 6) {
      setTimeout(() => {
        if (tutorial.number() !== 6) {
          return;
        }
        const cardsInActiveZone = me().activeZone.length;
        if (tutorial.number() === 6 && cardsInActiveZone >= 3) {
          tutorial.next();
        }
      }, 1000);
    }

    if (tutorial.number() === 7) {
      setTimeout(() => {
        if (tutorial.number() !== 7) {
          return;
        }
        if (me().funding <= 17) {
          tutorial.next();
        }
      }, 1000);
    }

    if (tutorial.number() === 8) {
      setTimeout(() => {
        if (tutorial.number() !== 8) {
          return;
        }
        if (me().narrative >= 3) {
          tutorial.next();
        }
      }, 1000);
    }

    if (tutorial.number() === 9) {
      setTimeout(() => {
        if (tutorial.number() !== 9) {
          return;
        }
        const cardWasTapped =
          me().activeZone.filter(({ tapped }) => tapped).length === 0;
        if (cardWasTapped) {
          tutorial.next();
        }
      }, 1000);
    }

    if (tutorial.number() === 11) {
      const cardsWereTargeted = state.target.from && state.target.to;
      if (cardsWereTargeted) {
        tutorial.next();
      }
    }

    if (tutorial.number() === 14) {
      setTimeout(() => {
        if (tutorial.number() !== 14) {
          return;
        }

        if (me().discardPile.length >= 1) {
          tutorial.next();
        }
      }, 1000);
    }

    if (tutorial.number() === 15) {
      setTimeout(() => {
        if (tutorial.number() !== 15) {
          return;
        }

        if (state.game.turn.number >= 2) {
          tutorial.next();
        }
      }, 1000);
    }
  };

  const increaseOrDecreaseStat = (stat, amount) => {
    sendMessage({
      type: `set-${stat}`,
      params: {
        targetUserId: me().id,
        [stat]: me()[stat] + amount,
      },
    });

    handleTutorialStep();
  };

  const shuffleDeck = () => {
    sendMessage({
      type: "shuffle-deck",
    });

    handleTutorialStep();
  };

  const tapOrUntapCard = (cardUuid) => {
    if (
      tutorial.started() &&
      tutorial.number() !== 9 &&
      tutorial.number() !== 10
    ) {
      return;
    }

    sendMessage({
      type: "tap-card",
      params: {
        cardUuid: cardUuid,
      },
    });

    handleTutorialStep();
  };

  const untapAllCards = () => {
    sendMessage({
      type: "untap-all-cards",
    });

    if (tutorial.started() && tutorial.number() === 10) {
      tutorial.next();
    }
  };

  const targetCard = (fromCardUuid, toCardUuid) => {
    sendMessage({
      type: "target",
      params: {
        target: {
          from: fromCardUuid,
          to: toCardUuid,
        },
      },
    });

    handleTutorialStep();
  };

  const moveCard = (cardUuid, destination) => {
    sendMessage({
      type: "move-card",
      params: {
        cardUuid,
        destination,
      },
    });

    // Clear targeting if card is moved off the board
    if (
      !["active-zone", "location", "the-think-tank"].includes(destination) &&
      (state.target.from === cardUuid || state.target.to === cardUuid)
    ) {
      setState({
        target: {
          from: null,
          to: null,
        },
      });
    }

    handleTutorialStep();
  };

  const drawCards = (amount = 1) => {
    sendMessage({
      type: "draw-cards",
      params: {
        amount,
      },
    });

    handleTutorialStep();
  };

  const endTurn = () => {
    sendMessage({
      type: "end-turn",
    });

    handleTutorialStep();
  };

  return {
    increaseOrDecreaseStat,
    shuffleDeck,
    tapOrUntapCard,
    untapAllCards,
    targetCard,
    moveCard,
    drawCards,
    endTurn,
  };
}

export default useGameControls;
