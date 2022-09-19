import { createSignal } from "solid-js";
import useDeckBuilder from "../../../hooks/useDeckBuilder";
import useModal from "../../../hooks/useModal";

function ModalDeckImport() {
  const modal = useModal();
  const deckBuilder = useDeckBuilder();
  const [importedDeck, setImportedDeck] = createSignal("");

  const importDeck = () => {
    deckBuilder.import(importedDeck());
    modal.close();
  };

  return (
    <>
      <div class="modal-header yellow double-arrow">
        <span class="white">Import Deck</span>
      </div>
      <div class="modal-body">
        <textarea
          rows={20}
          cols={80}
          style={{ resize: "none " }}
          onChange={(event) => setImportedDeck(event.target.value)}
        />
      </div>
      <div class="modal-footer">
        <button
          class="button"
          type="button"
          disabled={importedDeck().length === 0}
          onClick={importDeck}
        >
          Import
        </button>
        <button class="button" type="button" onClick={modal.close}>
          Close
        </button>
      </div>
    </>
  );
}

export default ModalDeckImport;
