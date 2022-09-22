import { createEffect, createMemo, onCleanup, onMount } from "solid-js";
import LeaderLine from "leader-line2";
import useStore from "../../store";
import "./CardTarget.scss";

const LINE_SETTINGS = {
  color: "#00ff07",
  size: 10,
  dropShadow: true,
  endPlug: "arrow3",
};

function CardTarget() {
  let cardTargetRef;
  let line;
  let tempLine;
  const { state, setState } = useStore();

  const isChoosingCardToTarget = createMemo(
    () => state.target.from && !state.target.to
  );

  const hasTarget = createMemo(() => state.target.from && state.target.to);

  const moveTarget = (event) => {
    cardTargetRef.style.left = `${
      event.pageX + cardTargetRef.offsetWidth / 2
    }px`;
    cardTargetRef.style.top = `${
      event.pageY + cardTargetRef.offsetHeight / 2
    }px`;

    tempLine?.position?.();
  };

  const handleResize = () => {
    line?.position?.();
    tempLine?.position?.();
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      setState({
        target: {
          from: null,
          to: null,
        },
      });
    }
  };

  createEffect(() => {
    if (!state.target.to && !state.target.from) {
      line?.remove?.();
      line = null;

      tempLine?.remove?.();
      tempLine = null;
    }
  });

  createEffect(() => {
    if (isChoosingCardToTarget()) {
      tempLine?.remove?.();

      const fromElement = document.getElementById(state.target.from);
      if (fromElement && cardTargetRef) {
        // Create temporary line following cursor
        tempLine = new LeaderLine(fromElement, cardTargetRef, LINE_SETTINGS);

        document.body.addEventListener("mousemove", moveTarget, true);
      }
    }
  });

  createEffect(() => {
    if (hasTarget()) {
      // Remove old line
      line?.remove?.();

      document.body.removeEventListener("mousemove", moveTarget, true);

      const fromElement = document.getElementById(state.target.from);
      const toElement = document.getElementById(state.target.to);

      if (fromElement && toElement) {
        line = new LeaderLine(fromElement, toElement, {
          ...LINE_SETTINGS,
          dash: { animation: true },
        });

        // Remove temp line
        tempLine = tempLine?.remove?.();
      }
    }
  });

  onMount(() => {
    line?.remove?.();
    tempLine?.remove?.();
    document.body.addEventListener("resize", handleResize, true);
    document.body.addEventListener("keydown", onKeyDown, true);
  });

  onCleanup(() => {
    line?.remove?.();
    tempLine?.remove?.();
    document.body.removeEventListener("mousemove", moveTarget, true);
    document.body.removeEventListener("resize", handleResize, true);
    document.body.removeEventListener("keydown", onKeyDown, true);
  });

  return <div ref={cardTargetRef} class="card-target" />;
}

export default CardTarget;
