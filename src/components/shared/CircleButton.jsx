import "./CircleButton.scss";

function CircleButton(props) {
  const onClick = (event) => {
    props.onClick(event);
  };

  const getClassName = () => {
    let className = "circle-button button";

    if (props.color) {
      className += ` ${props.color}`;
    }

    if (props.small) {
      className += " small";
    }

    if (props.disabled) {
      className += " disabled";
    }

    return className;
  };

  return (
    <button
      id={props.id}
      class={getClassName()}
      type="button"
      onClick={onClick}
      disabled={props.disabled}
    >
      <div class="circle" />
      <div class="label">{props.label}</div>
    </button>
  );
}

export default CircleButton;
