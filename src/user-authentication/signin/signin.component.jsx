import React, {useState} from "react";

import "./signin.styles.css";
import InputField from "../../components/input/input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { Link, withRouter } from "react-router-dom";
import { signin, authenticate } from "../../auth/helper/auth-data";
import { performRedirect, loadingMessage, errorMessage } from "../utils/utils";

// import queryString from "query-string";

const SignIn = ({location, history}) => {
    const [value, setValue] = useState({
        email: "",
        password:"",
        error: "",
        loading: false,
        didRedirect: false
    });
    const handleChange = (event) => {
        const {name, value} = event.target
        setValue(prevState => ({
            ...prevState,
            error: false,
            [name]:value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setValue({ ...value, error: false, loading: true});
        await signin({ email, password })
            .then(data => {
                console.log(data)
                if(data === undefined){
                    setValue({...value, error: "Invalid email and password, please try again.", loading: false, didRedirect: false})
                }
                if(data.error){
                    setValue({ ...value, error: data.error, loading: false, didRedirect: false })
                } else{
                    authenticate(data, () => {
                        setValue({
                            ...value,
                            didRedirect: true
                        })                     
                    })
                }
            })
            .catch(err => console.log("sign in failed"))
    }
    const {email, password, didRedirect, loading, error} = value
   
//     const signInWithGoogle = () => {
//     // authenticate(location.search, () =>  {
//     //     console.log(location)
//     //     setValue({
//     //         ...value,
//     //         didRedirect: true
//     //     })     
//     // })
//     let query = queryString.parse(location.search);
//     if (query.token) {
//       window.localStorage.setItem("jwt", query.token);
//       history.push("/");
//    }

//     }
const SignInForm = () => {
    return(
        <div className="signin-form">
        <form method="post" onSubmit={handleSubmit}>
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
        {/* <Link to="/auth/google" onClick={signInWithGoogle}>Google</Link> */}
        </form>
        </div>
    );
}

return(
    <div className="signin-page">
    <div className="signin-welcome">
        <h1>Welecome Back</h1>
        <p className="signin-link">I don't have an account, then</p>
        <button className="signin-link-button"><Link to='/signup'>sign up</Link></button>
    </div>
    <div className="signin">
        {loadingMessage(loading)}
        {errorMessage(error)}
        {SignInForm()}
        {performRedirect(didRedirect)}
    </div>
    </div>
)
    }



export default withRouter(SignIn);