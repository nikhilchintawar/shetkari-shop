import React from "react";
import InputField from "../../components/input/input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";




const updateUserForm = (
    user, 
    handleChange, 
    handleSubmit, 
    firstName, 
    lastName, 
    email,
    mobileNumber,  
    postalAddress,
    role,
    password
    ) => {
    return (
        <div>
        <span>Update Your Profile Here.</span>
        <form method="post" onSubmit={handleSubmit}>
        <InputField
        label="FirstName:"
        type="text"
        id="firstName"
        name="firstName"
        placeholder={user.firstName}
        value={firstName}
        handleChange={handleChange}
        />
        <InputField
        label="LastName:"
        type="text"
        id="lastName"
        name="lastName"
        placeholder={user.lastName}
        value={lastName}
        handleChange={handleChange}
        />
        <InputField
        label="Email:"
        type="email"
        id="email"
        name="email"
        placeholder={user.email}
        value={email}
        handleChange={handleChange}
        />
        <InputField
        label="Mobile No.:"
        type="tel"
        id="tel"
        name="mobileNumber"
        placeholder={user.mobileNumber}
        value={mobileNumber}
        handleChange={handleChange}
        />
        <InputField
        label="Address:"
        type="text"
        id="address"
        name="postalAddress"
        placeholder={user.postalAddress}
        value={postalAddress}
        handleChange={handleChange}
        />
        {
            user.role === 1 
            ?
            <InputField
            label="Role"
            type="number"
            id="role"
            name="role"
            placeholder={`don't want to be an authorized seller any more put 0 in input and if you want to continue then put 1.`}
            value={role}
            handleChange={handleChange}
            />
            :
            <InputField
            label="Role"
            type="number"
            id="role"
            name="role"
            placeholder={`Insert 1 if you want to be authorized seller.YOUR ROLE:-{user.role}`}
            value={role}
            handleChange={handleChange}
            />

        }

        {/* <InputField
        label="Password:"
        type="password"
        id="password"
        name="password"
        placeholder="password"
        value={password}
        handleChange={handleChange}
        /> */}
        <SubmitButton
        value="UPDATE"
        type="submit"
        />
        </form>
        
        </div>
    )
}

export default updateUserForm;