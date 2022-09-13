import "./CircleButton.scss";

function CircleButton(props) {
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
      class={getClassName()}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <div class="circle"></div>
      <div class="label">{props.label}</div>
    </button>
  );
}

export default CircleButton;
