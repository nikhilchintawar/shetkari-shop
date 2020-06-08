import React from "react";
import {withRouter} from "react-router-dom";
import "./footer.styles.css";
import { isAuthenticated, signout } from "../../auth/helper/auth-data";
import SubmitButton from "../../components/submit-button/submit-button.component";


const Footer = ({history}) =>(
    <div className="footer">
    <div className="signOut">
        {
            isAuthenticated() && (
                <SubmitButton
                    type="button"
                    value="SIGN OUT"
                    className="signOutButton"
                    onClick={() => {
                        signout(() => {
                            history.push("/signin");
                        })
                    }}
                    />
            )
                    }
    </div>               
        <div className="copyright">
            <p>Nikhil Chintawar &copy; 2020</p>
        </div>
    </div>
    )


export default withRouter(Footer);