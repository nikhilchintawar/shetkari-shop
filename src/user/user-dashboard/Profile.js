import React from 'react';
import "./profile.styles.css";
import { isAuthenticated } from '../../auth/helper/auth-data';
import { updateUser, deleteUser, getUser } from "../helper/userApiCall";
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import SubmitButton from '../../components/submit-button/submit-button.component';
import InputField from '../../components/input/input.component';

const Profile = () => {
    const { user } = isAuthenticated();

    const [values, setValues] = useState({
        firstName:"",
        lastName: "",
        mobileNumber: "",
        email: "",
        postalAddress: "",
        password: "",
        success: false,
        loading: false,
        error: ""
    })

    const {firstName, lastName, mobileNumber, email, postalAddress, password, success, error, loading} = values;

    
    
    const preload = (userId, token) => {
        getUser(userId, token).then(data => console.log(data))
    }

    useEffect(() => {
        preload()
    }, [])

    const deleteThisUser = () => {
        deleteUser(user._id, user.token).then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                
                return(<Redirect
                            to="/signup"
                       />)
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({...user, loading: true, error: ""});

        updateUser(user._id, user.token, user).then(data => {
            console.log(data)
            if(data.error){
                setValues({...values, error: data.error, success: false})
            }else{
                setValues({
                    ...values,
                    firstName:"",
                    lastName: "",
                    mobileNumber: "",
                    email: "",
                    postalAddress: "",
                    password: "",
                    success: true,
                    loading: false
                })
            }
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues(prevState => ({
            ...prevState,
                [name]: value
        }))
    }

    const updateUserForm = () => {
        return (
            <div className="form">
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
            <InputField
            label="Password:"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            handleChange={handleChange}
            />
            <SubmitButton
            value="UPDATE"
            type="submit"
            />
            </form>
            <SubmitButton
            value="DELETE ACCOUNT"
            type="submit"
            onClick={deleteThisUser}
            style={{backgroundColor: "#fff", color: "#ff0000", border: "1px solid #ff0000"}}
            />
            </div>
        )
    }


    return (
        <div>
            {updateUserForm()}
        </div>
    );
};

export default Profile;