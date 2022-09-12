import "./CircleButton.scss";

function CircleButton({ label, onClick, disabled, color, small }) {
  const getClassName = () => {
    let className = "circle-button button";

    if (color) {
      className += ` ${color}`;
    }

    if (small) {
      className += " small";
    }

    if (disabled) {
      className += " disabled";
    }

    return className;
  };

  return (
    <button
      class={getClassName()}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <div class="circle"></div>
      <div class="label">{label}</div>
    </button>
  );
}

export default CircleButton;
