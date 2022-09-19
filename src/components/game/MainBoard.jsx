import { createMemo, createEffect, Show } from "solid-js";
import { getCardImageById } from "../../utils";
import useStore from "../../store";
import Card from "../card/Card";
import Plasma from "../shared/Plasma";
import Zone from "./Zone";
import "./MainBoard.scss";

function MainBoard() {
  let locationRef;
  const { state, sendMessage } = useStore();

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);

  const me = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id === state.user.id)
  );

  createEffect(() => {
    if (state.game.location) {
      const locationImage = getCardImageById(state.game.location.id);
      const mainBoardRightPanel = document.querySelector(".main-board-right");

      mainBoardRightPanel.style.backgroundImage = `url("${locationImage}")`;
      mainBoardRightPanel.style.backgroundRepeat = "no-repeat";
      mainBoardRightPanel.style.backgroundPosition = "50% 15%";
      mainBoardRightPanel.style.backgroundSize = "800%";
      mainBoardRightPanel.style.backgroundBlendMode = "luminosity";
    }
  });

  const onDragOver = (event) => {
    event.preventDefault();
    locationRef.classList.add("drag-over");
  };

  const onDragLeave = () => {
    locationRef.classList.remove("drag-over");
  };

  const onDrop = (event) => {
    event.preventDefault();

    locationRef.classList.remove("drag-over");
    const cardUuid = event.dataTransfer.getData("text");

    sendMessage({
      type: "play",
      params: {
        cardUuid,
        destination: "location",
      },
    });
  };

  return (
    <div class={`main-board ${soloPlay() ? " solo-play" : ""}`}>
      <div class="main-board-left">
        <Show when={!soloPlay()}>
          <Zone name="the-think-tank" opponent />
          <Zone name="battle-zone" opponent />
          <div class="main-board-separator grunge">
            <Plasma />
          </div>
        </Show>
        <Zone name="battle-zone" />
        <Zone name="the-think-tank" />
      </div>
      <div class="main-board-right panel light-grunge">
        <div
          ref={locationRef}
          class={`location-card${state.game.location ? " has-location" : ""}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <fieldset>
            <legend>Location</legend>
            <Show when={state.game.location}>
              <Card
                card={state.game.location}
                location="location"
                opponent={!me().location}
              />
            </Show>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
