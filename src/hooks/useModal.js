import { createMemo } from "solid-js";
import useStore from "../store";

function useModal() {
  const { state, setState } = useStore();

  const currentModal = createMemo(() => state.modal.name);
  const currentData = createMemo(() => state.modal.data);

  const openModal = (name, data) => {
    setState({
      modal: {
        name,
        data,
      },
    });
  };

  const closeModal = () => {
    setState({
      modal: {
        name: null,
        data: null,
      },
    });
  };

  return {
    open: openModal,
    close: closeModal,
    current: currentModal,
    data: currentData,
  };
}

export default useModal;
