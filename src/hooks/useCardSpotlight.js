import useStore from "../store";
import useTutorial from "./useTutorial";

function useCardSpotlight() {
  const { state, setState } = useStore();
  const tutorial = useTutorial();

  const handleTutorialStep = () => {
    if (!tutorial.started()) {
      return;
    }

    if (tutorial.number() === 13) {
      const spotlightClosed = !state.focus.spotlight;
      if (spotlightClosed) {
        tutorial.next();
      }
      return;
    }
  };

  const closeCardSpotlight = () => {
    setState((state) => ({
      focus: {
        ...state.focus,
        spotlight: null,
      },
    }));

    handleTutorialStep();
  };

  const openCardSpotlight = (card) => {
    setState((state) => ({
      focus: {
        ...state.focus,
        spotlight: card,
      },
    }));
  };

  return {
    close: closeCardSpotlight,
    open: openCardSpotlight,
  };
}

export default useCardSpotlight;
