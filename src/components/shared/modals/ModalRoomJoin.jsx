import { createSignal } from "solid-js";
import useModal from "../../../hooks/useModal";
import useStore from "../../../store";

function ModalJoinRoom() {
  const { sendMessage } = useStore();
  const modal = useModal();
  const [roomCode, setRoomCode] = createSignal("");

  const joinRoom = (event) => {
    event.preventDefault();

    if (!roomCode()) {
      return;
    }

    sendMessage({ type: "join", params: { roomCode: roomCode() } });
  };

  return (
    <form onSubmit={joinRoom}>
      <label>Room code:</label>
      <input
        type="text"
        value={roomCode()}
        onChange={(event) => setRoomCode(event.target.value)}
      />
      <div class="modal-footer">
        <button class="button" type="submit" disabled={roomCode().length === 0}>
          OK
        </button>
        <button class="button" type="button" onClick={modal.close}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ModalJoinRoom;
