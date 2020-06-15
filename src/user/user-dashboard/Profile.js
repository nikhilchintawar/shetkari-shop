import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "./profile.styles.css";
import { isAuthenticated, signout } from '../../auth/helper/auth-data';
import { updateUser, deleteUser, getUser } from "../helper/userApiCall";
import updateUserForm from './UpdateUserForm';
import { loadingMessage } from '../../user-authentication/utils/utils';
import { UpdateSuccessMessage, errorMessage } from '../utils/utils';
import { withRouter } from 'react-router-dom';
import DeleteUserButton from './deleteThisUser';


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
        formData: ""
    })

    const {firstName, lastName, mobileNumber, email, postalAddress, password, role, success, error, loading} = values;

    
    
    const preload = (userId, token) => {
       getUser(userId, token).then(data => {
           if (data.error) {
                setValues({...values, error: data.error, success: false, loading: false})
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

    useEffect(() => {
        preload(user._id, token)
    }, [])


    const handleSubmit = event => {
        event.preventDefault();
        setValues({...user, loading: true, error: "", success: false});
        if(user.email === email && user.mobileNumber){
            setValues({...user, loading: false, error: true, success: false});
        }

        updateUser(user._id, token, user).then(data => {
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
            {updateUserForm(
                user, 
                handleChange, 
                handleSubmit, 
                firstName, 
                lastName, 
                email, 
                mobileNumber, 
                postalAddress, 
                role, 
                deleteThisUser
                )}
            {loadingMessage(loading)}
            {errorMessage(error)}
            {UpdateSuccessMessage(success, user.firstName)}
            <DeleteUserButton deleteThisUser={deleteThisUser} />
        </div>
    );
};

export default withRouter(Profile);