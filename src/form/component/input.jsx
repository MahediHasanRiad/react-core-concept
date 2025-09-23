function Input({ type = 'text', labelText, id, name, value, onChange }){
    return(
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                className="form-control"
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input;