import React, { useState } from 'react';
import './signup.styles.css'
import InputField from "../../components/input/input.component";
import SubmitButton from '../../components/submit-button/submit-button.component';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email:"",
        tel:"",
        address: "",
        password:"",
        confirmPassword:""
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target.value)
        setValue(prevState => ({
            ...prevState,
            [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const {password, confirmPassword} = value

        if (password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }
        alert(`your name is ${value.firstName}`)
    }

    const {firstName, lastName, tel, email, address, password, confirmPassword} = value

    return(
    <div className="form">
    <span>I already have an account, then <Link to='/signin'>sign in</Link> here.</span>
        <form action="" method="post" onSubmit={handleSubmit}>
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
        name="tel"
        placeholder="Mobile Number"
        value={tel}
        handleChange={handleChange}
        />
        <InputField
        label="Address:"
        type="text"
        id="address"
        name="address"
        placeholder="Address"
        value={address}
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
    </div>)
}

export default SignUp;