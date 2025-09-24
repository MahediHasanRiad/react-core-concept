function CheckBox({ labelText, id, name, value, checked, onChange }){
    return(
        <div>
            <input 
                className="mx-2"
                type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{labelText}</label>
        </div>
    )
}

export default CheckBox