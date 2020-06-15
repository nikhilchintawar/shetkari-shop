import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/submit-button/submit-button.component";


//deleteUser
const DeleteUserButton = ({deleteThisUser, history}) => (
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


export default DeleteUserButton;