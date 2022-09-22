import { createSignal, onMount } from "solid-js";
import useStore from "../../store";
import "./Connect.scss";

function Connect() {
  let inputRef;
  const { sendMessage, setState } = useStore();
  const [userName, setUserName] = createSignal("");
  const [error, setError] = createSignal(false);

  onMount(() => {
    inputRef.focus();
  });

  const connect = (event) => {
    event.preventDefault();

    const userNameTrimmed = userName().trim().slice(0, 30);

    if (userNameTrimmed.length === 0) {
      setError(true);
      return;
    }

    sendMessage({
      type: "lobby",
      params: {
        userName: userNameTrimmed,
      },
    });

    setState((state) => ({
      user: { ...state.user, name: userNameTrimmed },
    }));
  };

  return (
    <div class="connect">
      <div class="video">
        <video
          autoplay="true"
          loop="true"
          playsinline="true"
          muted
          tabIndex={-1}
        >
          <source
            type='video/mp4; codecs="av01.0.13M.10"'
            src="https://cdn.mondomegabits.com/logo/Mondo flashing logo_r3 - strobe.mp4"
          />
        </video>
      </div>
      <form
        class={`puppet-master-handle-input${error() ? " error" : ""}`}
        onSubmit={connect}
      >
        <label>Enter your Puppet Master name:</label>
        <input
          ref={inputRef}
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName()}
          minLength={3}
          maxLength={30}
        />
        <button class="connect-button button" type="submit">
          Connect
        </button>
      </form>
    </div>
  );
}

export default Connect;
