import { createMemo, Show } from "solid-js";
import useStore from "../../store";
import CardPile from "../card/CardPile";

function LeftSideBar() {
  const { state, sendMessage } = useStore();

  const me = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id === state.user.id)
  );

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);

  const isMyTurn = createMemo(() => state.game.turn.player === state.user.id);

  const opponent = createMemo(() =>
    soloPlay()
      ? null
      : state.game.puppetMasters.find(({ id }) => id !== state.user.id)
  );

  const opponentName = createMemo(() => {
    if (soloPlay()) {
      return null;
    }
    const opponentId = opponent()?.id;
    return getPuppetMasterName(opponentId);
  });

  const endTurn = () => {
    sendMessage({
      type: "end-turn",
      params: {
        gameCode: state.game.id,
        roomCode: state.room.code,
      },
    });
  };

  return (
    <div class="left-side-bar grunge">
      <Show when={!soloPlay()}>
        <div class="opponent">
          <fieldset>
            <legend class="white">{opponentName()}</legend>
            <div class="stats">
              <div class="stat panel">
                <div class="stat-label">Narrative</div>
                <div class="stat-number">{opponent().narrative}</div>
              </div>
              <div class="stat panel">
                <div class="stat-label">Funding</div>
                <div class="stat-number">{opponent().funding}</div>
              </div>
            </div>
            <div class="card-piles">
              <CardPile name="deck" cards={opponent().deck} />
              <CardPile name="discard-pile" cards={opponent().discardPile} />
            </div>
          </fieldset>
        </div>
      </Show>
      <div class="turn panel">
        <div class="turn-label">
          {isMyTurn() ? "Your Turn" : `${opponentName()}'s Turn`}
        </div>
        <div class="turn-number">{state.game.turn.number}</div>
        <Show when={isMyTurn()}>
          <button class="end-turn-button button" onClick={endTurn}>
            End My Turn
          </button>
        </Show>
      </div>
      <div class="me">
        <fieldset>
          <legend class="white">{state.user.name}</legend>
          <div class="card-piles">
            <CardPile name="deck" cards={me().deck} />
            <CardPile name="discard-pile" cards={me().discardPile} />
          </div>
          <div class="stats">
            <div class="stat panel">
              <div class="stat-label">Narrative</div>
              <div class="stat-number">{me().narrative}</div>
            </div>
            <div class="stat panel">
              <div class="stat-label">Funding</div>
              <div class="stat-number">{me().funding}</div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
export default LeftSideBar;
