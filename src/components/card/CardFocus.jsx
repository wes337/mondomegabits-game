import { createMemo, For, Show } from "solid-js";
import CardBackLarge from "../../assets/card-back-large.png";
import useStore from "../../store";
import "./CardFocus.scss";

function CardFocus() {
  const { state } = useStore();
  const card = createMemo(() => state.focus.hover || state.focus.current);

  return (
    <div class="card-focus">
      <Show
        when={card()}
        fallback={
          <div class="card-focus-back">
            <img src={CardBackLarge} />
          </div>
        }
      >
        <div class="card-focus-header">
          <div class="name teal">{card().name}</div>
          <div class="cost yellow">{card().cost}</div>
          <div class="type">{card().type}</div>
          <div class="subtype">{card().subtype}</div>
        </div>
        <Show when={card().type === "Creature"}>
          <div class="creature-stats grunge">
            <For each={Object.entries(card().stats)}>
              {([stat, value]) => (
                <div class="stat">
                  <div class="stat-name">{stat}</div>
                  <div class="stat-value">{value}</div>
                </div>
              )}
            </For>
          </div>
        </Show>
        {/* <div class="faction">
              <span class="white">Faction:</span> {card().faction}
            </div> */}
        <div class="card-body-outer">
          <div class="card-body-inner">
            <div class="body-text">{card().bodyText}</div>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default CardFocus;
