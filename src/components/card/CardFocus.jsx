import { createMemo, Show } from "solid-js";
import useStore from "../../store";
import "./CardFocus.scss";

function CardFocus() {
  const { state } = useStore();
  const card = createMemo(() => state.focus.hover || state.focus.current);

  return (
    <div class="card-focus">
      <div class="focused-card">
        <Show when={card()}>
          <div class="name teal">{card().name}</div>
          <div class="cost yellow">
            <span class="white">Cost:</span> {card().cost}
          </div>
          <div class="type">
            <span class="white">Type:</span> {card().type}
          </div>
          <div class="subtype">
            <span class="white">Subtype:</span> {card().subType}
          </div>
          <div class="faction">
            <span class="white">Faction:</span> {card().faction}
          </div>
          <div class="body-text">{card().bodyText}</div>
        </Show>
      </div>
    </div>
  );
}

export default CardFocus;
