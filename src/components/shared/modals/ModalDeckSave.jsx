import { createMemo, createSignal, createEffect } from "solid-js";
import useDeckBuilder from "../../../hooks/useDeckBuilder";
import useModal from "../../../hooks/useModal";

function ModalDeckSave() {
  const modal = useModal();
  const deckBuilder = useDeckBuilder();
  const newDeckName = createMemo(() => deckBuilder.draft().name);
  const [deckName, setDeckName] = createSignal("");

  createEffect(() => {
    setDeckName(newDeckName());
  });

  const saveDeck = (event) => {
    event.preventDefault();
    deckBuilder.name(deckName());
    deckBuilder.save();
    modal.close();
  };

  return (
    <>
      <div class="modal-header yellow double-arrow">
        <span class="white">Save Deck</span>
      </div>
      <div class="modal-body">
        <form onSubmit={saveDeck}>
          <label>Deck name:</label>
          <input
            type="text"
            value={deckName()}
            minLength={2}
            maxLength={100}
            onInput={(event) =>
              setDeckName(event.target.value.trim().slice(0, 100))
            }
          />
          <div class="modal-footer">
            <button
              class="button"
              type="submit"
              disabled={deckName().length === 0}
            >
              OK
            </button>
            <button class="button" type="button" onClick={modal.close}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ModalDeckSave;
