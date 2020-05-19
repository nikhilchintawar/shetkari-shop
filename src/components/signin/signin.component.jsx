import React, {useState} from "react";
import InputField from "../input/input.component";
import SubmitButton from "../submit-button/submit-button.component";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [value, setValue] = useState({
        userName: "",
        password:""
    });
    const handleChange = (event) => {
        const {name, value} = event.target
        setValue({[name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`your name is ${value.firstName}`)
    }

    const {userName, password} = value
    return(
        <div className="form signin">
        <form action="" method="post" onSubmit={handleSubmit}>
        <InputField
        label="UserName:"
        type="text"
        id="userName"
        name="userName"
        placeholder="username"
        handleChange={handleChange}
        value={userName}
        />
        <InputField
        label="Password:"
        type="password"
        id="password"
        name="password"
        placeholder="password"
        handleChange={handleChange}
        value={password}
        />
        <SubmitButton 
        type="submit"
        value="Submit"
        />
        </form>
        <span>If you don't have an account then <Link to='/signup'>sign up</Link> here.</span>
        </div>
    )
    
}

export default SignIn;