import { For } from "solid-js";
import MODAL_NAMES from "../../constants/modal";
import useModal from "../../hooks/useModal";
import useStore from "../../store";
import CircleButton from "../shared/CircleButton";
import "./Lobby.scss";

function Lobby() {
  const { state, setState, sendMessage } = useStore();
  const modal = useModal();

  const createRoom = () => {
    sendMessage({ type: "create" });
  };

  const openDeckBuilder = () => {
    setState({
      deckBuilderOpen: true,
    });
  };

  return (
    <div class="lobby">
      <div class="rooms grunge">
        <div class="headers yellow">
          <div class="header">Code</div>
          <div class="header">Users</div>
          <div class="header">Status</div>
        </div>
        <hr class="tall" />
        <For each={state.rooms}>
          {(room) => (
            <div class="room">
              <div class="room-code teal">{room.code}</div>
              <div class="room-users white">
                {room.users} / {room.maxUsers}
              </div>
              <div class={`room-status${room.status === "full" ? " red" : ""}`}>
                {room.status.toUpperCase()}
              </div>
              <div class="room-join">
                <CircleButton
                  label="Join"
                  disabled={room.status !== "open"}
                  onClick={() => {
                    sendMessage({
                      type: "join",
                      params: { roomCode: room.code },
                    });
                  }}
                  color="red"
                  small
                />
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="users">
        <span class="yellow">/// </span>Puppet Masters Online:
        <hr class="top" />
        <ul class="list">
          <For each={state.lobby}>
            {(user) => (
              <li class={user.id === state.user.id ? "glow" : "white"}>
                {user.name}
              </li>
            )}
          </For>
        </ul>
        <hr class="bottom" />
      </div>
      <div class="footer panel">
        <CircleButton label="Create" onClick={createRoom} />
        <CircleButton
          label="Join"
          onClick={() => modal.open(MODAL_NAMES.ROOM_JOIN)}
        />
        <CircleButton
          label="Deck Builder"
          onClick={openDeckBuilder}
          color="teal"
        />
      </div>
    </div>
  );
}

export default Lobby;
