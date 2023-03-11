import "./IconButton.scss";

function IconButton(props) {
  const onClick = (event) => {
    props.onClick(event);
  };

  const getClassName = () => {
    let className = "icon-button button";

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
      onClick={onClick}
      disabled={props.disabled}
    >
      <div class="icon">
        <img src={`./images/icons/${props.icon}.svg`} height={16} width={16} />
      </div>
    </button>
  );
}

export default IconButton;
