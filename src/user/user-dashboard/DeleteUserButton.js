import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import SubmitButton from "../../components/submit-button/submit-button.component";
import { isAuthenticated, signout } from "../../auth/helper/auth-data";
import { deleteUser } from "../helper/userApiCall";

//deleteUser
const DeleteUserButton = ({history}) => {
    const { user, token } = isAuthenticated();

    const deleteThisUser = () => {
        deleteUser(user._id, token).then(data => {
            console.log(data)
            if(data.error){
                return toast("Not able to delete account. please try again.", {
                    type: "success",
                    className: "toast-class"
                })
            }else{
                return(signout(() => {
                    history.push("/signup");
                    toast("Your account is successfullly deleted", {
                        type:"success",
                        className: "toast-class"
                    })
                }))
            }
        })
    }

        return (
            <div>
                <Link to="/signup">
                    <SubmitButton
                    value="DELETE ACCOUNT"
                    type="submit"
                    onClick={deleteThisUser}
                    style={{backgroundColor: "#fff", color: "#ff0000", border: "1px solid #ff0000"}}
                    />
                </Link>
            </div>
        )
}


export default DeleteUserButton;