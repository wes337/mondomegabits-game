/* eslint-disable solid/reactivity */
/* eslint-disable solid/components-return-once */
import useStore from "./index";

function LogMessage(props) {
  const { state } = useStore();

  const isMe = props.log.sourceUserId === state.user.id;

  const sourceUserName =
    props.log.sourceUserId &&
    state.room.users.find((user) => user.id === props.log.sourceUserId)?.name;

  const targetUserName =
    props.log.targetUserId &&
    state.room.users.find((user) => user.id === props.log.targetUserId)?.name;

  switch (props.log.event) {
    case "game-start": {
      return <>Game started!</>;
    }
    case "shuffle-deck": {
      return isMe ? (
        <>
          ** <span class="teal">You</span> shuffle your deck **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> shuffles their deck **
        </>
      );
    }
    case "draw-cards": {
      return isMe ? (
        <>
          ** <span class="teal">You</span> draw a card **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> draws a card **
        </>
      );
    }
    case "move-card": {
      const hands = ["look-hand", "stowed-hand"];
      const opponentStowedCards =
        !isMe &&
        hands.includes(props.log.movedFrom) &&
        hands.includes(props.log.movedTo);
      if (opponentStowedCards) {
        return (
          <>
            ** <span class="yellow">{sourceUserName}</span> moves a card from{" "}
            <span class="pink">{props.log.movedFrom}</span> to{" "}
            <span class="pink">{props.log.movedTo}</span> **
          </>
        );
      }
      return isMe ? (
        <>
          ** <span class="teal">You</span> move{" "}
          <span class="light-blue">{props.log.card.name}</span> from{" "}
          <span class="pink">{props.log.movedFrom}</span> to{" "}
          <span class="pink">{props.log.movedTo}</span> **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> moves{" "}
          <span class="light-blue">{props.log.card.name}</span> from{" "}
          <span class="pink">{props.log.movedFrom}</span> to{" "}
          <span class="pink">{props.log.movedTo}</span> **
        </>
      );
    }
    case "tap-card": {
      const tapOrUntap = props.log.card.tapped ? "tapped" : "untapped";
      return isMe ? (
        <>
          ** <span class="teal">You</span> {tapOrUntap}{" "}
          <span class="light-blue">{props.log.card.name}</span> **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> {tapOrUntap}{" "}
          <span class="light-blue">{props.log.card.name}</span> **
        </>
      );
    }
    case "untap-all-cards": {
      return isMe ? (
        <>
          ** <span class="teal">You</span> untapped all of your cards. **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> untapped all of their
          cards. **
        </>
      );
    }
    case "set-funding": {
      return isMe ? (
        <>
          ** <span class="teal">You</span> set your funding to{" "}
          <span class="pink">{props.log.amount}</span> **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> set their funding to{" "}
          <span class="pink">{props.log.amount}</span> **
        </>
      );
    }
    case "set-narrative": {
      return isMe ? (
        <>
          ** <span class="teal">You</span> set your narrative to{" "}
          <span class="pink">{props.log.amount}</span> **
        </>
      ) : (
        <>
          ** <span class="yellow">{sourceUserName}</span> set their narrative to{" "}
          <span class="pink">{props.log.amount}</span> **
        </>
      );
    }

    case "end-turn": {
      return isMe ? (
        <>
          <span class="teal">You</span> ended your turn. It's now{" "}
          <span class="pink">{targetUserName}</span>'s turn.
        </>
      ) : (
        <>
          <span class="yellow">{sourceUserName}</span> ended their turn. It's
          now <span class="teal">your</span> turn.
        </>
      );
    }
    default: {
      return props.log.event;
    }
  }
}

export const gameLogToChatMessage = (log) => {
  return {
    message: <LogMessage log={log} />,
    date: log.date,
    user: { id: "GAME" },
  };
};
