import { Show, For } from "solid-js";
import MODAL_NAMES from "../../../constants/modal";
import { ellipsisToString } from "../../../utils/string";
import useModal from "../../../hooks/useModal";
import CircleButton from "../CircleButton";
import "./ModalDeckManage.scss";
import useDeckBuilder from "../../../hooks/useDeckBuilder";

function ModalDeckManage() {
  const modal = useModal();
  const deckBuilder = useDeckBuilder();

  const deckIsLoaded = (deckName) => {
    return deckName === deckBuilder.draft().name;
  };

  const loadDeck = (deckName) => {
    deckBuilder.load(deckName);
    modal.close();
  };

  const deleteDeck = (event, deckName) => {
    event.stopPropagation();
    modal.open(MODAL_NAMES.CONFIRM, {
      header: `Delete Deck ${ellipsisToString(deckName)}`,
      body: "Are you sure you want to delete this deck?",
      callback: () => {
        deckBuilder.remove(deckName);
        modal.close();
      },
      closeCallback: () => {
        queueMicrotask(() => modal.open(MODAL_NAMES.DECK_MANAGE));
      },
    });
  };

  return (
    <>
      <div class="modal-header yellow double-arrow">
        <span class="white">Manage Decks</span>
      </div>
      <div class="modal-body modal-deck-manage">
        <Show
          when={deckBuilder.myDecks().length > 0}
          fallback={
            <div class="no-saved-decks">
              <hr class="top" />
              <div class="white">You don't have any saved decks...</div>
              <div class="yellow bracket glow wide">GO MAKE SOME</div>
              <hr class="bottom" />
            </div>
          }
        >
          <ul class="saved-decks list">
            <For each={deckBuilder.myDecks()}>
              {(deck) => (
                <li
                  id={deck.name}
                  class={`saved-deck${
                    deckIsLoaded(deck.name) ? " loaded" : ""
                  }`}
                  onClick={() => loadDeck(deck.name)}
                >
                  <div class="saved-deck-name">
                    {ellipsisToString(deck.name)}
                  </div>
                  <div class="saved-deck-buttons">
                    <CircleButton
                      label="Delete"
                      onClick={(event) => deleteDeck(event, deck.name)}
                      color="red"
                      small
                    />
                  </div>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </div>
      <div class="modal-footer">
        <button class="button" type="button" onClick={modal.close}>
          Close
        </button>
      </div>
    </>
  );
}

export default ModalDeckManage;
