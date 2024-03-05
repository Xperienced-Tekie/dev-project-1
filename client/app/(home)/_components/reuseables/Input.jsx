function Input(props) {
  const { inputtype, label, ...inputProps } = props;
  const { id } = inputProps;
  let inputElement = null;
  switch (inputtype) {
    case "input":
      inputElement = <input id={id} {...inputProps} />;
      break;
    case "textarea":
      inputElement = <textarea id={id} {...inputProps} />;
      break;
    default:
      inputElement = <input id={id} {...inputProps} />;
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
