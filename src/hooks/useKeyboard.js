import useGameControls from "./useGameControls";
import useTutorial from "./useTutorial";

function useKeyboard() {
  const tutorial = useTutorial();

  const gameControls = useGameControls();

  const tutorialKeyboardControls = (event) => {
    event.preventDefault();
    const { key, ctrlKey } = event;

    const tutorialStepNumber = tutorial.number();

    if (key === "Enter" && tutorial.current().showNextButton) {
      tutorial.next();
      return;
    }

    if (tutorialStepNumber === 1) {
      if (ctrlKey && key.toLowerCase() === "s") {
        gameControls.shuffleDeck();
      }
    } else if (tutorialStepNumber === 3) {
      if (ctrlKey && key.toLowerCase() === "d") {
        gameControls.drawCards(1);
      }
    } else if (tutorialStepNumber === 7) {
      if (ctrlKey && key.toLowerCase().match(/3|#/)) {
        gameControls.increaseOrDecreaseStat("funding", -1);
      }
    } else if (tutorialStepNumber === 8) {
      if (ctrlKey && key.toLowerCase().match(/=|\+/)) {
        gameControls.increaseOrDecreaseStat("narrative", 1);
      }
    } else if (tutorialStepNumber === 10) {
      if (ctrlKey && key.toLowerCase() === "u") {
        gameControls.untapAllCards();
      }
    }
  };

  const keyboardControls = (event) => {
    const { key, ctrlKey } = event;

    if (ctrlKey) {
      switch (key.toLowerCase()) {
        case "s": {
          event.preventDefault();
          gameControls.shuffleDeck();
          break;
        }
        case "d": {
          event.preventDefault();
          gameControls.drawCards(1);
          break;
        }
        case "u": {
          event.preventDefault();
          gameControls.untapAllCards();
          break;
        }
        case "+": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("narrative", 1);
          break;
        }
        case "=": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("narrative", 1);
          break;
        }
        case "-": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("narrative", -1);
          break;
        }
        case "_": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("narrative", -1);
          break;
        }
        case "$": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("funding", 1);
          break;
        }
        case "4": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("funding", 1);
          break;
        }
        case "#": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("funding", -1);
          break;
        }
        case "3": {
          event.preventDefault();
          gameControls.increaseOrDecreaseStat("funding", -1);
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  return {
    controls: keyboardControls,
    tutorialControls: tutorialKeyboardControls,
  };
}

export default useKeyboard;
