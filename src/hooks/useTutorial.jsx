import { createSignal } from "solid-js";
import useStore from "../store";

const tutorialSteps = [
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          This tutorial will teach you how to perform all of the basic game
          mechanics.
        </p>
        <p>
          <span class="yellow">[[</span>
          Please note that this is a sandbox game. All players can draw, move,
          and interact with cards and the board freely.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: true,
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          You can press <span class="yellow">Ctrl + S</span> to shuffle your
          deck.
        </p>
        <p>
          <span class="yellow">[[</span>Shuffle your deck.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          Notice that your action was recorded in the chat. All actions
          performed by players will be shown in the chat.
        </p>
      </div>
    ),
    showNextButton: true,
    position: () =>
      document.querySelector(".game-chat")?.getBoundingClientRect(),
    placement: "left",
    effect: () => {
      document.querySelector(".game-chat").style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          To draw a card, press <span class="yellow">Ctrl + D</span> or{" "}
          <span class="yellow">click on your deck</span>.
        </p>
        <p>
          <span class="yellow">[[</span>Draw 5 cards.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".card-piles")?.getBoundingClientRect(),
    placement: "right",
    effect: () => {
      document.querySelector(".game-chat").style.zIndex = "0";
      const piles = document.querySelector(".card-piles");
      piles.style.zIndex = "2";
      piles.style.position = "relative";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">Focus on a card by clicking on it once.</p>
        <p>
          <span class="yellow">[[</span>Focus on a card in your Look Hand.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
    effect: () => {
      const piles = document.querySelector(".card-piles");
      piles.style.zIndex = "auto";
      piles.style.position = "static";
      const footer = document.querySelector(".game-footer");
      footer.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          Here you can see the card's details such as its cost, stats,
          type/subtype, etc.
        </p>
      </div>
    ),
    showNextButton: true,
    position: () =>
      document.querySelector(".card-focus")?.getBoundingClientRect(),
    placement: "left",
    effect: () => {
      const footer = document.querySelector(".game-footer");
      footer.style.zIndex = "auto";
      const cardFocus = document.querySelector(".card-focus");
      cardFocus.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          To play a card, <span class="yellow">drag it onto the board</span> or{" "}
          <span class="yellow">double click it</span>.
        </p>
        <p>
          <span class="yellow">[[</span>Play 3 cards from your Look Hand.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
    effect: () => {
      const cardFocus = document.querySelector(".card-focus");
      cardFocus.style.zIndex = "auto";
      const footer = document.querySelector(".game-footer");
      footer.style.zIndex = "2";
      const activeZone = document.querySelector(".active-zone");
      activeZone.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          <span class="glow">Decrease</span> your funding by pressing{" "}
          <span class="yellow">Ctrl + 3</span> or{" "}
          <span class="yellow">
            press the '-' button next to your funding amount
          </span>
          .
        </p>
        <p class="white">
          <span class="glow">Increase</span> your funding by pressing{" "}
          <span class="yellow">Ctrl + 4</span> or{" "}
          <span class="yellow">
            press the '+' button next to your funding amount
          </span>
          .
        </p>
        <p>
          <span class="yellow">[[</span>Decrease your funding by 3 points.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () => document.querySelector(".me")?.getBoundingClientRect(),
    placement: "right",
    effect: () => {
      const footer = document.querySelector(".game-footer");
      footer.style.zIndex = "auto";
      const activeZone = document.querySelector(".active-zone");
      activeZone.style.zIndex = "auto";
      const me = document.querySelector(".me");
      me.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          <span class="glow">Decrease</span> your narrative by pressing{" "}
          <span class="yellow">Ctrl + -</span> or{" "}
          <span class="yellow">
            press the '-' button next to your narrative amount
          </span>
          .
        </p>
        <p class="white">
          <span class="glow">Increase</span> your narrative by pressing{" "}
          <span class="yellow">Ctrl + +</span> or{" "}
          <span class="yellow">
            press the '+' button next to your narrative amount
          </span>
          .
        </p>
        <p>
          <span class="yellow">[[</span>Increase your narrative by 3 points.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () => document.querySelector(".me")?.getBoundingClientRect(),
    placement: "right",
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          To tap a card, <span class="yellow">double click</span> it.
        </p>
        <p>
          <span class="yellow">[[</span>Tap a card in the active zone.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
    effect: () => {
      const me = document.querySelector(".me");
      me.style.zIndex = "auto";
      const activeZone = document.querySelector(".active-zone");
      activeZone.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          To untap a card, <span class="yellow">double click</span> it again.
        </p>
        <p class="white">
          You can untap all cards in your active zone by pressing{" "}
          <span class="yellow">Ctrl + U</span>.
        </p>
        <p>
          <span class="yellow">[[</span>Untap all of your cards in the active
          zone.<span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          You can create lines between cards to signal to and communicate with
          other players.
        </p>
        <p class="white">
          <span class="yellow">Hover over a card</span> in the active zone, and{" "}
          <span class="yellow">click the ⌖ button</span>. Then,{" "}
          <span class="yellow">click on another card</span> to target it.
        </p>
        <p>
          <span class="yellow">[[</span>Create a line between 2 cards.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          <span class="yellow">Hover over a card</span> and{" "}
          <span class="yellow">press the ⇱ button</span> to view it in its full
          size.
        </p>
        <p>
          <span class="yellow">[[</span>View a card in its full size.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          <span class="yellow">Click anywhere</span> or{" "}
          <span class="yellow">press any key</span> to close the card spotlight.
        </p>
        <p>
          <span class="yellow">[[</span>Close the card spotlight.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".card-spotlight img")?.getBoundingClientRect(),
    placement: "left",
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          You can move cards by{" "}
          <span class="yellow">dragging and dropping</span> them to any desired
          zone.
        </p>
        <p>
          <span class="yellow">[[</span>Move a card to your discard pile.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
    effect: () => {
      const me = document.querySelector(".me");
      me.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          Click the <span class="yellow">End My Turn</span> button to end your
          turn.
        </p>
        <p>
          <span class="yellow">[[</span>End your turn.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: false,
    position: () => document.querySelector(".turn")?.getBoundingClientRect(),
    placement: "right",
    effect: () => {
      const me = document.querySelector(".me");
      me.style.zIndex = "auto";
      const activeZone = document.querySelector(".active-zone");
      activeZone.style.zIndex = "auto";
      const turnPanel = document.querySelector(".turn");
      turnPanel.style.zIndex = "2";
    },
  },
  {
    content: (
      <div class="tutorial-text">
        <p class="white">
          That's all you need to know to get started! Click next to end the
          tutorial.
        </p>
        <p>
          <span class="yellow">[[</span>End the tutorial.
          <span class="yellow">]]</span>
        </p>
      </div>
    ),
    showNextButton: true,
    position: () =>
      document.querySelector(".game-footer")?.getBoundingClientRect(),
    placement: "top",
    effect: () => {
      const turnPanel = document.querySelector(".turn");
      turnPanel.style.zIndex = "auto";
    },
  },
];

const [tutorialStep, setTutorialStep] = createSignal(0);
const [tutorialStarted, setTutorialStarted] = createSignal(false);

function useTutorial() {
  const { sendMessage } = useStore();
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

  return {
    current: currentStep,
    next: nextStep,
    number: currentStepNumber,
    reset: resetTutorial,
    started: tutorialStarted,
    end: endTutorial,
  };
}

export default useTutorial;
