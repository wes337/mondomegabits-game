import { createMemo, createSignal, createEffect } from "solid-js";
import useStore from "../store";
import tutorialSteps from "../components/tutorial/tutorialSteps";

const [tutorialStep, setTutorialStep] = createSignal(0);
const [tutorialStarted, setTutorialStarted] = createSignal(false);

function useTutorial() {
  const { state, sendMessage } = useStore();

  const me = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id === state.user.id)
  );

  const resetTutorial = () => {
    setTutorialStarted(true);
    setTutorialStep(0);
  };

  const currentStep = () => {
    return tutorialSteps[tutorialStep()];
  };

  const nextStep = () => {
    setTutorialStep(tutorialStep() + 1);
  };

  const currentStepNumber = () => {
    return tutorialStep();
  };

  const endTutorial = () => {
    setTutorialStarted(false);
    setTutorialStep(0);
    sendMessage({ type: "leave-game" });
    sendMessage({ type: "leave" });
  };

  const handleTutorialStep = () => {
    if (!tutorialStarted()) {
      return;
    }

    if (tutorialStep() === 1) {
      // shuffle deck
      nextStep();
    }

    if (tutorialStep() === 3) {
      if (me().lookHand.length === 5) {
        nextStep();
      }
    }

    if (tutorialStep() === 4) {
      const cardsInFocus = state.focus.current;
      if (cardsInFocus) {
        nextStep();
      }
      return;
    }

    if (tutorialStep() === 6) {
      const cardsInActiveZone = me().activeZone.length;
      if (cardsInActiveZone >= 3) {
        nextStep();
      }
    }

    if (tutorialStep() === 7) {
      if (me().funding <= 17) {
        nextStep();
      }
    }

    if (tutorialStep() === 8) {
      if (me().narrative >= 3) {
        nextStep();
      }
    }

    if (tutorialStep() === 9) {
      const cardWasTapped =
        me().activeZone.filter(({ tapped }) => tapped).length >= 1;
      if (cardWasTapped) {
        nextStep();
      }
    }

    if (tutorialStep() === 10) {
      const allCardsAreUntapped =
        me().activeZone.filter(({ tapped }) => tapped).length === 0;
      if (allCardsAreUntapped) {
        nextStep();
      }
    }

    if (tutorialStep() === 11) {
      const cardsWereTargeted = state.target.from && state.target.to;
      if (cardsWereTargeted) {
        nextStep();
      }
    }

    if (tutorialStep() === 12) {
      const cardsInSpotlight = state.focus.spotlight;
      if (cardsInSpotlight) {
        nextStep();
      }
      return;
    }

    if (tutorialStep() === 13) {
      const spotlightClosed = !state.focus.spotlight;
      if (spotlightClosed) {
        nextStep();
      }
      return;
    }

    if (tutorialStep() === 14) {
      if (me().discardPile.length >= 1) {
        nextStep();
      }
    }

    if (tutorialStep() === 15) {
      if (state.game.turn.number >= 2) {
        nextStep();
      }
    }
  };

  createEffect(() => {
    if (tutorialStarted() && state.game) {
      handleTutorialStep();
    }
  });

  return {
    current: currentStep,
    next: nextStep,
    number: currentStepNumber,
    reset: resetTutorial,
    started: tutorialStarted,
    end: endTutorial,
    handle: handleTutorialStep,
  };
}

export default useTutorial;
