import React from "react";
import { toast } from "react-toastify";
import "./utils.css";
import SubmitButton from "../../components/submit-button/submit-button.component";

const CloseButton = ({closeToast}) => (
    <SubmitButton
    type="button"
    onClick={closeToast}
    value="CLOSE"
    />
)

const SuccessMessage = (success, createdProduct) => {
    if(success){
        return toast(`${createdProduct} is created successfully.`, {
            type:"success",
            toastId: "",
            className: "toast-class"
        })
    }
}

const UpdateSuccessMessage = (success, createdProduct) => {
    if(success){
        return toast(`${createdProduct} is updated successfully.`, {
            type:"success",
            toastId: "",
            className: "toast-class"
        })
    }
}



export  {SuccessMessage, CloseButton, UpdateSuccessMessage};