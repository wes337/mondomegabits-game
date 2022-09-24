import { children, createEffect, onMount, onCleanup } from "solid-js";
import "./Tooltip.scss";

function Tooltip(props) {
  let tooltipRef;
  const c = children(() => props.children);

  const calculatePosition = () => {
    if (!props.position) {
      return;
    }

    tooltipRef.style.top = `${
      props.position.top + props.position.height / 2
    }px`;
    if (props.placement === "top") {
      tooltipRef.style.top = `${
        props.position.top - props.position.height / 2
      }px`;
    }

    if (props.placement === "left") {
      tooltipRef.style.left = `${
        props.position.left - props.position.width / 2 - 100
      }px`;
    } else if (props.placement === "right") {
      tooltipRef.style.left = `${
        props.position.left + props.position.width * 4
      }px`;
    } else {
      tooltipRef.style.left = `${
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
      <div ref={tooltipRef} class="tooltip">
        <div class="tooltip-outer">
          <div class="tooltip-inner">{c()}</div>
        </div>
      </div>
      <div class="tooltip-overlay" />
    </>
  );
}

export default Tooltip;
