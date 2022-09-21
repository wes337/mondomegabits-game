import { createEffect } from "solid-js";
import useSnackbar from "../../hooks/useSnackbar";
import "./Snackbar.scss";

function Snackbar() {
  let snackbarRef;
  const snackbar = useSnackbar();

  createEffect(() => {
    if (snackbar.message()) {
      snackbarRef.classList.add("show");
      setTimeout(() => {
        snackbar.clear();
        snackbarRef.classList.remove("show");
      }, snackbar.duration());
    }
  });

  return (
    <div ref={snackbarRef} class="snackbar">
      <div class="snackbar-outer">
        <div class="snackbar-inner">
          <hr class="top" />
          {snackbar.message()}
          <hr class="bottom" />
        </div>
      </div>
    </div>
  );
}

export default Snackbar;
