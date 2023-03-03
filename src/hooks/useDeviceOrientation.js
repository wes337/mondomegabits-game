import { createSignal, onMount, onCleanup } from "solid-js";
import { isMobileDevice } from "../utils";

const [deviceOrientation, setDeviceOrientation] = createSignal(
  isMobileDevice() && !!screen?.orientation?.type?.match?.("portrait")
    ? "portrait"
    : "landscape"
);

function useDeviceOrientation() {
  const updateOrientation = () => {
    setDeviceOrientation(
      isMobileDevice() && !!screen?.orientation?.type?.match?.("portrait")
        ? "portrait"
        : "landscape"
    );
  };

  onMount(() => {
    if (isMobileDevice() && screen.orientation) {
      screen.orientation.onchange = updateOrientation;
      window.addEventListener("orientationchange", updateOrientation);
    }
  });

  onCleanup(() => {
    if (isMobileDevice() && screen.orientation) {
      screen.orientation.onchange = null;
      window.removeEventListener("orientationchange", updateOrientation);
    }
  });

  return deviceOrientation;
}

export default useDeviceOrientation;
