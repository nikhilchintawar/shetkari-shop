import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "./profile.styles.css";
import { isAuthenticated, signout } from '../../auth/helper/auth-data';
import { updateUser, deleteUser } from "../helper/userApiCall";
import { loadingMessage } from '../../user-authentication/utils/utils';
import { UpdateSuccessMessage, errorMessage } from '../utils/utils';
import { withRouter } from 'react-router-dom';
import DeleteUserButton from './deleteThisUser';
import UpdateUserForm from './UpdateUserForm';


const Profile = ({history}) => {
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
        newData: ""
    })

    const {firstName, lastName, mobileNumber, email, postalAddress, role, success, error, loading} = values;

    
    
    const preload = () => {       
                setValues({
                    ...values, 
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    mobileNumber: user.mobileNumber,
                    postalAddress: user.postalAddress,
                    // password: data.password,
                    role: user.role,
                    newData: ""
                })
            }
       
    

    useEffect(() => {
        preload()
    }, [])


    const handleSubmit = event => {
        event.preventDefault();
        setValues({...user, loading: true, error: "", success: false});

        const newData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            postalAddress: postalAddress,
            role: role
        }
        console.log(newData)

        updateUser(user._id, token, newData).then(data => {
            console.log(data)
            if(data.error){
                setValues({...values, error: data.error, success: false})
            }else{
                console.log(data)
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

    const handleChange = (event) => {
        const {name, value} = event.target;
       
        setValues(prevState => ({
            ...prevState,
                [name]: value
        }))
    }
//delete user
    const deleteThisUser = () => {
        deleteUser(user._id, token).then(data => {
            console.log(data)
            if(data.error){
                console.log(data.error)
                setValues({...values, error: data.error, success: false, loading: false})
            }else{
                return(signout(() => {
                    history.push("/signup");
                    toast("Your account is successfullly deleted", {
                        type:"success",
                        className: "toast-class"
                    })
                }))
            }
        })
    }

    

    return (
        <div className="form">

            <UpdateUserForm 
            user={user} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            firstName={firstName}
            lastName={lastName}
            email={email}
            mobileNumber={mobileNumber}
            postalAddress={postalAddress}
            role={role}
            />

            {loadingMessage(loading)}
            {/* {errorMessage(error)} */}
            {/* {UpdateSuccessMessage(success, user.firstName)} */}
            <DeleteUserButton deleteThisUser={deleteThisUser} />
        </div>
    );
};

export default withRouter(Profile);