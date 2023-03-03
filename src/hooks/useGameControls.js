import { createMemo } from "solid-js";
import useStore from "../store";
import useTutorial from "./useTutorial";

function useGameControls() {
  const tutorial = useTutorial();
  const { state, setState, sendMessage } = useStore();

  const me = createMemo(() =>
    state.game?.puppetMasters.find(({ id }) => id === state.user.id)
  );

  const increaseOrDecreaseStat = (stat, amount) => {
    sendMessage({
      type: `set-${stat}`,
      params: {
        targetUserId: me().id,
        [stat]: me()[stat] + amount,
      },
    });
  };

  const shuffleDeck = () => {
    sendMessage({
      type: "shuffle-deck",
    });
  };

  const tapOrUntapCard = (cardUuid) => {
    sendMessage({
      type: "tap-card",
      params: {
        cardUuid: cardUuid,
      },
    });
  };

  const untapAllCards = () => {
    sendMessage({
      type: "untap-all-cards",
    });
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
  };

  const drawCards = (amount = 1) => {
    sendMessage({
      type: "draw-cards",
      params: {
        amount,
      },
    });
  };

  const endTurn = () => {
    sendMessage({
      type: "end-turn",
    });
  };

  const startGame = () => {
    sendMessage({
      type: "start",
    });

    // Clear cards in focus
    setState({
      focus: {
        current: null,
        hover: null,
        spotlight: null,
      },
      target: {
        from: null,
        to: null,
      },
    });
  };

  const leaveGame = () => {
    if (tutorial.started()) {
      tutorial.end();
    } else {
      sendMessage({
        type: "leave-game",
      });
    }
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
    startGame,
    leaveGame,
  };
}

export default useGameControls;
