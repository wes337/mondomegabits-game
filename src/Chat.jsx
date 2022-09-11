import { createSignal, onCleanup, createEffect, For } from "solid-js";
import useStore from "./store";
import "./Chat.scss";

function Chat() {
  let messagesRef;
  const { state, setState, sendMessage } = useStore();
  const [input, setInput] = createSignal("");

  createEffect(() => {
    // Scroll to new messages when they arrive
    if (!messagesRef || state.room?.chatMessages.length === 0) {
      return;
    }

    messagesRef.scrollTop = messagesRef.scrollHeight;
  });

  const sendChatMessage = (event) => {
    event.preventDefault();

    const message = input();

    if (message.length === 0) {
      return;
    }

    const chatMessage = {
      message,
      date: new Date().toISOString(),
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
        roomCode: state.room.code,
        chatMessage,
      },
    });

    setInput("");
  };

  return (
    <div class="chat">
      <div class="messages" ref={messagesRef}>
        <For each={state.room.chatMessages}>
          {(message) => (
            <div class="message">
              <p>
                <span
                  class={`message-user ${
                    message.user.id === state.user.id ? "teal" : "white"
                  }`}
                >
                  {message.user.name}
                </span>{" "}
                {message.message}
              </p>
              <div class="message-date yellow">
                {new Date(message.date).toLocaleTimeString("en-US")}
              </div>
            </div>
          )}
        </For>
      </div>
      <form onSubmit={sendChatMessage}>
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input()}
        />
        <button class="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
