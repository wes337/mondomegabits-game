import { createSignal, createEffect, onMount, onCleanup, Show } from "solid-js";
import "./CountDown.scss";

function CountDown(props) {
  const [timer, setTimer] = createSignal();
  const [count, setCount] = createSignal();

  createEffect(() => {
    setCount(props.from);
  });

  const startTimer = () => {
    if (!timer() && count() > 0) {
      setTimer(setInterval(countDown, 1000));
    }
  };

  const countDown = () => {
    let seconds = count() - 1;

    setCount(seconds);

    if (seconds === 0) {
      clearInterval(timer());
      props.callback?.();
    }
  };

  onMount(() => {
    startTimer();
  });

  onCleanup(() => {
    clearInterval(timer());
  });

  return (
    <Show when={count() > 0}>
      <div class="countdown">
        <h1 class="white">Starting in:</h1>
        <div class="count">
          <span class="glow">{count()}</span>
        </div>
      </div>
    </Show>
  );
}

export default CountDown;
