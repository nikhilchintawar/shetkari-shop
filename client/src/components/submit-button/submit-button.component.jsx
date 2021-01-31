import React from "react";


const SubmitButton = ({type, value, onClick, ...props}) => (
    <input type={type} value={value} onClick={onClick} {...props}/>
)

export default SubmitButton;