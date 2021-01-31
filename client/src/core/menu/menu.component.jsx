import React, { Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './menu.styles.css';


import { ReactComponent as Logo} from '../../assets/seeding.svg';
import { ReactComponent as Cart} from "../../assets/cart.svg";
import { isAuthenticated } from '../../auth/helper/auth-data';


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { 
          color: "#ffffff",
          backgroundColor: "#000000",
          padding: "10px",
          borderRadius: "5px"
         };
    } else {
      return { color: "#000000" };
    }
  };


const Menu = ({ history }) => {
    return(
        <div className='header'>
        
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <ul className="options">

        {!isAuthenticated() && (
            <Fragment>
            <li>
            <Link 
                style={currentTab(history, '/signup')} 
                className='option' 
                to='/signup'
            >
                SIGN UP
            </Link> 
            </li>
            <li>
            <Link 
                style={currentTab(history, '/signin')} 
                className='option' 
                to='/signin'
            >
                SIGN IN
            </Link> 
            </li>
            </Fragment>
        )}
        { isAuthenticated() && (
            <li>
                <Link
                    style={currentTab(history, "/user/profile/:userId")}
                    className="option"
                    to={`/user/profile/${isAuthenticated().user._id}`}
                    >
                        PROFILE
                    </Link>
            </li>
        )}
            {isAuthenticated() &&  isAuthenticated().user.role === 1 && (
                <li>
                    <Link
                    style={currentTab(history, "/farmer/dashboard")}
                    className="option"
                    to="/farmer/dashboard">
                        FARMER DASHBOARD
                    </Link>
                </li>
            )}
            <li>
            <Link style={currentTab(history, '/products')} className='option' to='/shop'>
                SHOP
            </Link>
            </li>
            {   
                isAuthenticated() && (
           <li>
            <Link className='option' to='/user/cart'>
                <Cart className="cart" />
            </Link>
           </li>
                )}
        
        </ul>
        </div>
      
    )
}

export default withRouter(Menu);