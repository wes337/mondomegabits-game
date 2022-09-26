import { children, createEffect, onMount, onCleanup } from "solid-js";
import "./TutorialGuide.scss";

function TutorialGuide(props) {
  let tutorialGuideRef;
  const c = children(() => props.children);

  const calculatePosition = () => {
    if (!props.position) {
      return;
    }

    tutorialGuideRef.style.top = `${
      props.position.top + props.position.height / 2
    }px`;
    if (props.placement === "top") {
      tutorialGuideRef.style.top = `${
        props.position.top - props.position.height / 2
      }px`;
    }

    if (props.placement === "left") {
      tutorialGuideRef.style.left = `${
        props.position.left - props.position.width / 2 - 100
      }px`;
    } else if (props.placement === "right") {
      tutorialGuideRef.style.left = `${
        props.position.left + props.position.width * 4
      }px`;
    } else {
      tutorialGuideRef.style.left = `${
        props.position.left + props.position.width / 2
      }px`;
    }
  };

  createEffect(() => {
    calculatePosition();
  });

  onMount(() => {
    window.addEventListener("resize", calculatePosition, true);
  });

  onCleanup(() => {
    window.removeEventListener("resize", calculatePosition, true);
  });

  return (
    <>
      <div ref={tutorialGuideRef} class="tutorial-guide">
        <div class="tutorial-guide-outer">
          <div class="tutorial-guide-inner">{c()}</div>
        </div>
      </div>
      <div class="tutorial-guide-overlay" />
    </>
  );
}

export default TutorialGuide;
