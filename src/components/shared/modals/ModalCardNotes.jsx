import { createSignal } from "solid-js";
import useModal from "../../../hooks/useModal";
import useStore from "../../../store";

function ModalCardNotes() {
  const modal = useModal();
  const { sendMessage } = useStore();
  const [cardNotes, setCardNotes] = createSignal(modal.data().card.notes);

  const onConfirm = () => {
    sendMessage({
      type: "edit-card-notes",
      params: {
        cardUuid: modal.data().card.uuid,
        notes: cardNotes(),
      },
    });
    modal.close();
  };

  const onClose = () => {
    modal.close();
  };

  return (
    <>
      <div class="modal-header yellow double-arrow">
        <span class="white">{modal.data().card.name}</span>
      </div>
      <div class="modal-body">
        <textarea
          rows={20}
          cols={80}
          style={{ resize: "none" }}
          onChange={(event) => setCardNotes(event.target.value)}
        >
          {cardNotes()}
        </textarea>
      </div>
      <div class="modal-footer">
        <button class="button" type="button" onClick={onConfirm}>
          Save
        </button>
        <button class="button" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default ModalCardNotes;
