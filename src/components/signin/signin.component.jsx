import React from "react";
import InputField from "../input/input.component";
import SubmitButton from "../submit-button/submit-button.component";


const SignIn = () => {
    return(
        <div className="form">
        <form action="" method="post">
        <InputField
        label="UserName:"
        type="text"
        id="userName"
        name="userName"
        placeholder="username"
        />
        <InputField
        label="Password:"
        type="password"
        id="password"
        name="password"
        placeholder="password"
        />
        <SubmitButton 
        type="submit"
        value="Submit"
        />
        </form>
        </div>
    )
    
}

export default SignIn;