import React from "react";


const InputField = ({label, type, id, name, placeholder}) => {
    return(
        <div>
            <label htmlFor="">{label}
                <input type={type} id={id} name={name} placeholder={placeholder} required/>
            </label>
        </div>
    )
}

export default InputField