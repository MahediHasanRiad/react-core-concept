function InputRadio({type = 'radio', id, name, value, onChange, labelText }) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} className="mx-2">
        {labelText}
      </label>
    </>
  );
}

export default InputRadio;
