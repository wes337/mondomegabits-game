import { createMemo } from "solid-js";
import useDeckBuilder from "../../../hooks/useDeckBuilder";
import useModal from "../../../hooks/useModal";

function ModalDeckExport() {
  const modal = useModal();
  const deckBuilder = useDeckBuilder();
  const deckString = createMemo(() => deckBuilder.export());

  const copyDeckToClipboard = () => {
    navigator.clipboard.writeText(deckString());
  };

  return (
    <>
      <div class="modal-header yellow double-arrow">
        <span class="white">Export Deck</span>
      </div>
      <div class="modal-body">
        <textarea rows={20} cols={80} style="resize: none;" readonly>
          {deckString()}
        </textarea>
      </div>
      <div class="modal-footer">
        <button class="button" type="button" onClick={copyDeckToClipboard}>
          Copy to Clipboard
        </button>
        <button class="button" type="button" onClick={modal.close}>
          Close
        </button>
      </div>
    </>
  );
}

export default ModalDeckExport;
