import { createSignal, onMount, onCleanup } from "solid-js";
import { isMobileDevice } from "../utils";

function useDeviceOrientation() {
  const isMobile = isMobileDevice();
  const [deviceOrientation, setDeviceOrientation] = createSignal(
    isMobile && !!screen?.orientation?.type?.match?.("portrait")
      ? "portrait"
      : "landscape"
  );

  const updateOrientation = () => {
    setDeviceOrientation(
      isMobile && !!screen?.orientation?.type?.match?.("portrait")
        ? "portrait"
        : "landscape"
    );
  };

  onMount(() => {
    if (isMobile && screen.orientation) {
      screen.orientation.onchange = updateOrientation;
      window.addEventListener("orientationchange", updateOrientation);
    }
  });

  onCleanup(() => {
    if (isMobile && screen.orientation) {
      screen.orientation.onchange = null;
      window.removeEventListener("orientationchange", updateOrientation);
    }
  });

  return deviceOrientation;
}

export default useDeviceOrientation;
