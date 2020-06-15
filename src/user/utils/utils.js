import { toast } from "react-toastify"




const UpdateSuccessMessage = (success, firstName) => {
    if(success){
        return toast(`${firstName} your profile is updated successfully.`, {
            type:"success",
            toastId: "",
            className: "toast-class"
        })
    }
}

const errorMessage = (error) => {
    if(error){
        return toast("can not able to update your profile, please try again.", {
            type:"error",
            toastId: "",
            className: "toast-class"
        })
    }
}

export { UpdateSuccessMessage, errorMessage }