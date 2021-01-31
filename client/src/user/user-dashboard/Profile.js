import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import "./profile.styles.css";
import { isAuthenticated } from '../../auth/helper/auth-data';
import { updateUser,getUser } from "../helper/userApiCall";
import { loadingMessage } from '../../user-authentication/utils/utils';
import { UpdateSuccessMessage, errorMessage } from '../utils/utils';
import DeleteUserButton from './DeleteUserButton';
import UpdateUserForm from './UpdateUserForm';
import InputField from "../../components/input/input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { API } from '../../backend';



const Profile = ({history, match}) => {
    const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        firstName:"",
        lastName: "",
        mobileNumber: "",
        email: "",
        postalAddress: "",
        password: "",
        role: "",
        success: false,
        loading: false,
        error: "",
        formData:""
    })

    const {firstName, lastName, mobileNumber, email, postalAddress, role, success, error, loading, formData} = values;

    useEffect(() => {
        const preload = (userId, token) => {    
            getUser(userId, token).then(data => {
                console.log(data);
                
                if(data?.error){
                    setValues({...values, error: data.error, success: false });
                }else{
                    setValues({
                        ...values, 
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        mobileNumber: data.mobileNumber,
                        postalAddress: data.postalAddress,
                        // password: data.password,
                        role: data.role,
                        formData: new FormData()
                        
                    })
                }
            })
        }

        preload(user._id, token)
    }, [])


    const handleSubmit = event => {
        event.preventDefault();
        setValues({...values, loading: true, error: "", success: false});

        const newData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            postalAddress: postalAddress,
            role: role
        }
        console.log('1',newData);
        
        updateUser(match.params.userId, token, newData).then(data => {
            console.log(data)
            if(data.error){
                setValues({...values, error: data.error, success: false})
            }else{
                // console.log(data)
                setValues({
                    ...values,
                    firstName:"",
                    lastName: "",
                    mobileNumber: "",
                    email: "",
                    postalAddress: "",
                    password: "",
                    role: "",
                    success: true,
                    loading: false
                })
            }
        })
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //      setValues({...values, loading: true, error: "", success: false});

    //      const newData = {
    //          firstName: firstName,
    //          lastName: lastName,
    //          email: email,
    //          mobileNumber: mobileNumber,
    //          postalAddress: postalAddress,
    //          role: role
    //      }

    //      const updateUser = (userId, token, user) => {
    //         return fetch(`${API}/user/${userId}`, {
    //             method: "PUT",
    //             mode: "cors",
    //             headers: {
    //                 Accept: "application/json",
    //                 Authorization: `Bearer ${token}`
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         .then(response => response.json())
    //         .catch(error => console.log(error))
    //     }

    //     updateUser(user._id, token, newData)
    // }

    const handleChange = name => (event) => {
        const {value} = event.target;
        // formData.append(name, value)
        setValues({ ...values, [name]: value });
    }
//delete user


    const createUpdateForm = () => {
        return (
            <div>
            <span>Update Your Profile Here.</span>
            <form method="post">
            <InputField
            label="FirstName:"
            type="text"
            id="firstName"
            name="firstName"
            placeholder={user.firstName}
            value={firstName}
            handleChange={handleChange("firstName")}
            />
            <InputField
            label="LastName:"
            type="text"
            id="lastName"
            name="lastName"
            placeholder={user.lastName}
            value={lastName}
            handleChange={handleChange("lastName")}
            />
            <InputField
            label="Email:"
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
            value={email}
            handleChange={handleChange("email")}
            />
            <InputField
            label="Mobile No.:"
            type="tel"
            id="tel"
            name="mobileNumber"
            placeholder={user.mobileNumber}
            value={mobileNumber}
            handleChange={handleChange("mobileNumber")}
            />
            <InputField
            label="Address:"
            type="text"
            id="address"
            name="postalAddress"
            placeholder={user.postalAddress}
            value={postalAddress}
            handleChange={handleChange("postalAddress")}
            />
            {
                user.role === 1 
                ?
                <InputField
                label="Role:"
                type="number"
                id="role"
                name="role"
                placeholder={`don't want to be an authorized seller any more put 0 in input and if you want to continue then put 1.`}
                value={role}
                handleChange={handleChange("role")}
                />
                :
                <InputField
                label="Role:"
                type="number"
                id="role"
                name="role"
                placeholder={`Insert 1 if you want to be authorized seller.YOUR ROLE:-{user.role}`}
                value={role}
                handleChange={handleChange("role")}
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
            onClick={handleSubmit}
            />
            </form>
            
            </div>
    
        )
    }

    

    return (
        <div className="form">

            {/* <UpdateUserForm 
            user={user} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            firstName={firstName}
            lastName={lastName}
            email={email}
            mobileNumber={mobileNumber}
            postalAddress={postalAddress}
            role={role}
            /> */}
      
            {createUpdateForm()}
            {loadingMessage(loading)}
            {/* {errorMessage(error)} */}
            {/* {UpdateSuccessMessage(success, user.firstName)} */}
            <DeleteUserButton history={history} />
        </div>
    );
};

export default withRouter(Profile);