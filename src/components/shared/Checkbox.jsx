import "./Checkbox.scss";

function Checkbox(props) {
  const onChange = (event) => {
    props.onChange(event);
  };

  return (
    <label class="checkbox">
      <span class="label">{props.label}</span>
      <input
        type="checkbox"
        onChange={onChange}
        value={props.value}
        name={props.name}
        checked={props.checked}
      />
      <span class="checkmark">[ ]</span>
    </label>
  );
}

export default Checkbox;
