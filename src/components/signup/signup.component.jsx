import React from 'react';
import './signup.styles.css'


const SignUp = () => {

    return(<div className="signup">
        <form action="" method="post">
        <label htmlFor="">FirstName:
            <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
            </label>
            <label htmlFor="">LastName:
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required/>
            </label>
            <label htmlFor="">UserName:
            <input type="text" name="userName" id="userName" placeholder="username" required/></label><br/>
            <label htmlFor="">Email:
            <input type="email" name="email" id="email" placeholder="Email"/>
            </label>
            <label htmlFor="">Mobile No.:
            <input type="tel" id="tel" name="tel" placeholder="Mobile Number" required/>
            </label>
            <label htmlFor="">Address:
                <input type="text" id="address" name="address" placeholder="Address" required/>
            </label>
            <label htmlFor="">Password:
            <input type="password" name="password" id="password" placeholder="password" required/></label>
            <input type="submit" value="Submit"/>
        </form>
    </div>)
}

export default SignUp;