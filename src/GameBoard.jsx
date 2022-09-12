import { createSignal, createMemo, onMount, For } from "solid-js";
import useStore from "./store";
import Chat from "./Chat";
import OpponentHand from "./OpponentHand";
import Hand from "./Hand";
import CardFocus from "./CardFocus";
import "./GameBoard.scss";
import Zone from "./Zone";
import CardPile from "./CardPile";
import CircleButton from "./CircleButton";

function GameBoard() {
  let mainRef;
  const { state, setState, sendMessage } = useStore();

  const me = createMemo(() =>
    state.game.puppetMasters.find(({ id }) => id === state.user.id)
  );

  const getPuppetMasterName = (puppetMasterId) =>
    state.room.users.find((user) => user.id === puppetMasterId)?.name;

  const soloPlay = createMemo(() => state.game.puppetMasters.length === 1);
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

  const isMyTurn = createMemo(() => state.game.turn.player === state.user.id);

  const leaveGame = () => {
    sendMessage({
      type: "leave-game",
    });
  };

  const endTurn = () => {
    sendMessage({
      type: "end-turn",
      params: {
        gameCode: state.game.id,
        roomCode: state.room.code,
      },
    });
  };

  const onClick = (event) => {
    // Remove focus from cards when clicking
    // something else inside the main board
    const clickedAnotherElementInsideMainBoard =
      event.target.id !== state.focus.current?.uuid &&
      mainRef.contains(event.target);

    if (clickedAnotherElementInsideMainBoard) {
      setState((state) => ({
        focus: {
          ...state.focus,
          current: null,
        },
      }));
    }
  };

  return (
    <div class="game-board" onClick={onClick}>
      <Show when={!soloPlay()}>
        <div class="header grunge">
          <Hand opponent />
        </div>
      </Show>
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
      <div ref={mainRef} class={`main${soloPlay() ? " solo-play" : ""}`}>
        <Show when={!soloPlay()}>
          <Zone name="the-think-tank" opponent />
          <Zone name="buffer-zone" opponent />
          <Zone name="battle-zone" opponent />
          <div class="middle grunge">
            <hr class="dotted-double" />
          </div>
        </Show>
        <Zone name="battle-zone" />
        <Zone name="buffer-zone" />
        <Zone name="the-think-tank" />
      </div>
      <div
        class={`right-side-bar grunge${
          state.chatExpanded ? " chat-expanded" : ""
        }`}
      >
        <div class="options">
          <CircleButton label="Leave" onClick={leaveGame} small />
        </div>
        <CardFocus />
        <div class="game-chat">
          <button
            class="expand-button button"
            onClick={() => setState({ chatExpanded: !state.chatExpanded })}
          >
            {state.chatExpanded ? "Hide Chat" : "Show Chat"}
          </button>
          <Show when={state.chatExpanded}>
            <Chat />
          </Show>
        </div>
      </div>
      <div class="footer panel grunge">
        <Hand />
      </div>
    </div>
  );
}

export default GameBoard;
