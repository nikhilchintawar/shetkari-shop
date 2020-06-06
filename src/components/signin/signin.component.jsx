import React, {useState} from "react";
import InputField from "../input/input.component";
import SubmitButton from "../submit-button/submit-button.component";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [value, setValue] = useState({
        email: "",
        password:""
    });
    const handleChange = (event) => {
        const {name, value} = event.target
        setValue(prevState => ({
            ...prevState,
            [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`your name is ${value.email}`)
    }

    const {email, password} = value
    return(
        <div className="form signin">
        <form action="" method="post" onSubmit={handleSubmit}>
        <InputField
        label="Email:"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        handleChange={handleChange}
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
        value="SIGN IN"
        />
        </form>
        <span>I don't have an account, then <Link to='/signup'>sign up</Link> here.</span>
        </div>
    )
    
}

export default SignIn;