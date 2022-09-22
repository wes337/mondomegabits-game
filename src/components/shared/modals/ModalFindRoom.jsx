import { createSignal, For } from "solid-js";
import useModal from "../../../hooks/useModal";
import useStore from "../../../store";
import CircleButton from "../CircleButton";
import "./ModalFindRoom.scss";

function ModalFindRoom() {
  const { state, sendMessage } = useStore();
  const modal = useModal();
  const [roomCode, setRoomCode] = createSignal("");

  const joinRoomByCode = (event) => {
    event.preventDefault();

    if (!roomCode()) {
      return;
    }

    sendMessage({ type: "join", params: { roomCode: roomCode() } });
    modal.close();
  };

  return (
    <div class="modal-find-room">
      <div class="modal-header yellow double-arrow">
        <span class="white">Join game</span>
      </div>
      <div class="modal-body">
        <div class="rooms">
          <fieldset>
            <legend>Games</legend>
            <table class="room-list">
              <thead>
                <tr>
                  <th class="red">
                    [ <span class="yellow">Code</span> ]
                  </th>
                  <th class="red">
                    [ <span class="yellow">Players</span> ]
                  </th>
                  <th class="red">
                    [ <span class="yellow">Status</span> ]
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <For
                  each={state.rooms}
                  fallback={
                    <div class="no-games-found">
                      No games found, go start one!
                    </div>
                  }
                >
                  {(room) => (
                    <tr>
                      <td class="room-code teal">{room.code}</td>
                      <td class="room-users white">
                        {room.users} / {room.maxUsers}
                      </td>
                      <td
                        class={`room-status${
                          room.status === "full" ? " red" : ""
                        }`}
                      >
                        {room.status.toUpperCase()}
                      </td>
                      <td class="room-join">
                        <CircleButton
                          label="Join"
                          disabled={room.status !== "open"}
                          onClick={() => {
                            sendMessage({
                              type: "join",
                              params: { roomCode: room.code },
                            });
                            modal.close();
                          }}
                          color="red"
                          small
                        />
                      </td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </fieldset>
        </div>
        <div class="join-code">
          <fieldset>
            <legend>Join by code</legend>
            <form onSubmit={joinRoomByCode}>
              <input
                type="text"
                value={roomCode()}
                onChange={(event) => setRoomCode(event.target.value)}
              />
              <button
                class="button"
                type="submit"
                disabled={roomCode().length === 0}
              >
                Join
              </button>
            </form>
          </fieldset>
        </div>
      </div>
      <div class="modal-footer">
        <button class="button" type="button" onClick={modal.close}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ModalFindRoom;
