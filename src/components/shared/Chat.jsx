import { onMount, createEffect, For, Switch, Match } from "solid-js";
import useStore from "../../store";
import "./Chat.scss";

function Chat(props) {
  let messagesRef;
  let chatInputRef;
  const { state, setState, sendMessage } = useStore();

  onMount(() => {
    chatInputRef?.focus?.();
  });

  createEffect(() => {
    // Scroll to new messages when they arrive
    if (!messagesRef || state.room?.chatMessages.length === 0) {
      return;
    }

    messagesRef.scrollTop = messagesRef.scrollHeight;
  });

  const sendChatMessage = (event) => {
    event.preventDefault();

    const message = state.chatInput;

    if (message.length === 0) {
      return;
    }

    const chatMessage = {
      message,
      date: new Date().toLocaleTimeString("en-US"),
    };

    setState((state) => ({
      room: {
        ...state.room,
        chatMessages: [
          ...state.room.chatMessages,
          {
            ...chatMessage,
            user: state.user,
          },
        ],
      },
    }));

    sendMessage({
      type: "chat",
      params: {
        chatMessage,
      },
    });

    setState({ chatInput: "" });
  };

  const SystemMessage = (props) => {
    return (
      <div class="message system">
        <p class="red italic">
          <span class="white">[ </span>
          {props.message.message}
          <span class="white"> ]</span>
        </p>
        <div class="message-date yellow">{props.message.date}</div>
      </div>
    );
  };

  const GameMessage = (props) => {
    return (
      <div class="message game">
        <p class="white">{props.message.message}</p>
        <div class="message-date yellow">{props.message.date}</div>
      </div>
    );
  };

  const UserMessage = (props) => {
    return (
      <div class="message">
        <p>
          <span
            class={`message-user ${
              props.message.user.id === state.user.id ? "teal" : "white"
            }`}
          >
            {props.message.user.name}
          </span>{" "}
          {props.message.message}
        </p>
        <div class="message-date yellow">{props.message.date}</div>
      </div>
    );
  };

  return (
    <div class={`chat${props.small ? " small" : ""}`}>
      <div class="messages grunge" ref={messagesRef}>
        <For each={state.room.chatMessages}>
          {(message) => (
            <Switch fallback={<UserMessage message={message} />}>
              <Match when={message.user.id === "SYSTEM"}>
                <SystemMessage message={message} />
              </Match>
              <Match when={message.user.id === "GAME"}>
                <GameMessage message={message} />
              </Match>
            </Switch>
          )}
        </For>
      </div>
      <form class={props.small ? "small" : ""} onSubmit={sendChatMessage}>
        <input
          ref={chatInputRef}
          type="text"
          onChange={(event) => setState({ chatInput: event.target.value })}
          value={state.chatInput}
        />
        <button class="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
