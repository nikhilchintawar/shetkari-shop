import React from 'react';
import './signup.styles.css'
import InputField from "../input/input.component";
import SubmitButton from '../submit-button/submit-button.component';

const SignUp = () => {

    return(<div className="form">
        <form action="" method="post">
        <InputField
        label="FirstName:"
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        />
        <InputField
        label="LastName:"
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        />
        <InputField
        label="UserName:"
        type="text"
        id="userName"
        name="userName"
        placeholder="username"
        />
        <InputField
        label="Email:"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        />
        <InputField
        label="Mobile No.:"
        type="tel"
        id="tel"
        name="tel"
        placeholder="Mobile Number"
        />
        <InputField
        label="Address:"
        type="text"
        id="address"
        name="address"
        placeholder="Address"
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
    </div>)
}

export default SignUp;