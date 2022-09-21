import { createMemo, createSignal } from "solid-js";
import useStore from "../store";

function useSnackbar() {
  const { state, setState } = useStore();
  const [snackbarDuration, setSnackbarDuration] = createSignal(3000);

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
