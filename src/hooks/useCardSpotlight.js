import useStore from "../store";

function useCardSpotlight() {
  const { setState } = useStore();

  const closeCardSpotlight = () => {
    setState((state) => ({
      focus: {
        ...state.focus,
        spotlight: null,
      },
    }));
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
