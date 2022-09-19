import { For } from "solid-js";
import "./Plasma.scss";

function Plasma() {
  const numberOfBubbles = 10;

  return (
    <div class="plasma">
      <For each={[...Array(numberOfBubbles)]}>
        {(_, index) => <div class={`bubble x${index() + 1}`} />}
      </For>
    </div>
  );
}

export default Plasma;
