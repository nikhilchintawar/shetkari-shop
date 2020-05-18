import React from "react";


const InputField = ({label, type, name, placeholder, handleChange, otherProps}) => {
    return(
        <div>
            <label htmlFor="">{label}</label>
                <input type={type} name={name} placeholder={placeholder} onChange={handleChange} {...otherProps} required/>
            
        </div>
    )
}

export default InputField