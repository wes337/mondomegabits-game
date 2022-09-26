import { Show, createEffect } from "solid-js";
import useTutorial from "../../hooks/useTutorial";
import TutorialGuide from "./TutorialGuide";
import "./Tutorial.scss";

function Tutorial() {
  const tutorial = useTutorial();

  createEffect(() => {
    if (tutorial.started() && tutorial.current()) {
      tutorial.current().effect?.();
    }
  });

  return (
    <TutorialGuide
      position={tutorial.current().position?.()}
      placement={tutorial.current().placement}
    >
      {tutorial.current().content}
      <Show when={tutorial.current().showNextButton}>
        <button
          class="button tutorial-button"
          onClick={() => {
            if (tutorial.number() === 16) {
              tutorial.end();
            } else {
              tutorial.next();
            }
          }}
        >
          Next
        </button>
      </Show>
    </TutorialGuide>
  );
}

export default Tutorial;
