import { createMemo, createSignal } from "solid-js";
import useStore from "../store";

const [snackbarDuration, setSnackbarDuration] = createSignal(3000);

function useSnackbar() {
  const { state, setState } = useStore();

  const message = createMemo(() => state.snackbar);

  const setSnackbar = (snackbar) => {
    setState({
      snackbar,
    });
  };

  const clearSnackbar = () => {
    setState({
      snackbar: "",
    });
  };

  return {
    set: setSnackbar,
    clear: clearSnackbar,
    duration: snackbarDuration,
    setDuration: setSnackbarDuration,
    message,
  };
}

export default useSnackbar;
