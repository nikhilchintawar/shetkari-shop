import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signup.styles.css'
import InputField from "../../components/input/input.component";
import SubmitButton from '../../components/submit-button/submit-button.component';
import { signup } from "../../auth/helper/auth-data";
import { successMessage ,errorMessage } from "../utils/utils";

const SignUp = () => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email:"",
        mobileNumber:"",
        postalAddress: "",
        password:"",
        confirmPassword:"",
        error: "",
        success: false
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValue(prevState => ({
            ...prevState,
            [name]:value}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        const {password, confirmPassword} = value

        if (password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }
        setValue({ ...value, error: false });
        await signup({ firstName, lastName, email, mobileNumber, postalAddress, password })
            .then(data => {
                if(data.error){
                    setValue({ ...value, error: data.error, success: false })
                } else{
                    setValue({
                        ...value,
                        firstName:"",
                        lastName: "",
                        email: "",
                        mobileNumber: "",
                        postalAddress: "",
                        password: "",
                        confirmPassword: "",
                        error: "",
                        success: true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    const {firstName, lastName, mobileNumber, email, postalAddress, password, confirmPassword, success, error   } = value

    const signUpForm = () => {
    return(
    <div className="signup">
    <span>I already have an account, then <Link to='/signin'>sign in</Link> here.</span>
        <form method="post" onSubmit={handleSubmit}>
        <InputField
        label="FirstName:"
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        handleChange={handleChange}
        />
        <InputField
        label="LastName:"
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        handleChange={handleChange}
        />
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
        label="Mobile No.:"
        type="tel"
        id="tel"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={mobileNumber}
        handleChange={handleChange}
        />
        <InputField
        label="Address:"
        type="text"
        id="address"
        name="postalAddress"
        placeholder="Address"
        value={postalAddress}
        handleChange={handleChange}
        />
        <InputField
        label="Password:"
        type="password"
        id="password"
        name="password"
        placeholder="password"
        value={password}
        handleChange={handleChange}
        />
        <InputField
        label="Confirm Password:"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        handleChange={handleChange}
        />
        <SubmitButton 
        type="submit"
        value="SIGN UP"   
        />
        </form>
    </div>
    )
}


return (
    <div className="signup-page">
        <div className="welcome-part">
            <h1 className="signup-title">Shetkari Shop</h1>
            <h2 className="welcome-message">Home For Farmers.</h2>
        </div>
        <div className="signup-form">
        {successMessage(success)}
        {errorMessage(error)}
        {signUpForm()}  
        </div>
    </div>
)
}





export default SignUp;