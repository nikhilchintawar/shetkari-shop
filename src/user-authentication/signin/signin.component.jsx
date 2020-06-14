import React, {useState} from "react";
import InputField from "../../components/input/input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { Link } from "react-router-dom";
import { signin, authenticate } from "../../auth/helper/auth-data";
import { performRedirect, loadingMessage, errorMessage } from "../utils/utils";


const SignIn = () => {
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

    

const SignInForm = () => {
    return(
        <div className="form signin">
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
        </form>
        <span>I don't have an account, then <Link to='/signup'>sign up</Link> here.</span>
        </div>
    );
}

return(
    <div>
    {loadingMessage(loading)}
    {errorMessage(error)}
    {SignInForm()}
    {performRedirect(didRedirect)}
    </div>
)
    }



export default SignIn;