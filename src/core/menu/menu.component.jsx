import React, { Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './menu.styles.css';


import { ReactComponent as Logo} from '../../assets/seeding.svg';
import { ReactComponent as Cart} from "../../assets/cart.svg";
import { isAuthenticated } from '../../auth/helper/auth-data';


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#ffffff" };
    } else {
      return { color: "#800080" };
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
                    style={currentTab(history, "/user/profile")}
                    className="option"
                    to="/user/profile"
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
           <li>
            <Link className='option' to='/cart'>
                <Cart className="cart" />
            </Link>
           </li>
        
        </ul>
        </div>
      
    )
}

export default withRouter(Menu);