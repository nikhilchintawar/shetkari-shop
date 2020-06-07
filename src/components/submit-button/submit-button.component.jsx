import React from "react";


const SubmitButton = ({type, value, onClick}) => (
    <input type={type} value={value} onClick={onClick}/>
)

export default SubmitButton;