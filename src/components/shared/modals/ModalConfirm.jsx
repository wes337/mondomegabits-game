import { Show } from "solid-js";
import useModal from "../../../hooks/useModal";

function ModalConfirm() {
  const modal = useModal();

  const onClick = (event) => {
    modal.data()?.callback?.(event);
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
        <button class="button" type="button" onClick={onClick}>
          {modal.data().confirm || "OK"}
        </button>
        <button class="button" type="button" onClick={modal.close}>
          {modal.data().cancel || "Cancel"}
        </button>
      </div>
    </>
  );
}

export default ModalConfirm;
