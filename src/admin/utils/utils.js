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
            toastId: "",
            className: "toast-class"
        })
    }
}

export  {SuccessMessage, CloseButton};