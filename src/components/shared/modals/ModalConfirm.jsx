import { Show } from "solid-js";
import useModal from "../../../hooks/useModal";

function ModalConfirm() {
  const modal = useModal();

  const onConfirm = (event) => {
    modal.data()?.callback?.(event);
    modal.close();
  };

  const onClose = (event) => {
    modal.data()?.closeCallback?.(event);
    modal.close();
  };

  return (
    <>
      <Show when={modal.data().header}>
        <div class="modal-header yellow double-arrow">
          <span class="white">{modal.data().header}</span>
        </div>
      </Show>
      <div class="modal-body">{modal.data().body || "Are you sure?"}</div>
      <div class="modal-footer">
        <button class="button" type="button" onClick={onConfirm}>
          {modal.data().confirm || "OK"}
        </button>
        <button class="button" type="button" onClick={onClose}>
          {modal.data().cancel || "Cancel"}
        </button>
      </div>
    </>
  );
}

export default ModalConfirm;
