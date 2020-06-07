import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './header.styles.css';


import { ReactComponent as Logo} from '../../assets/seeding.svg';
import { isAuthenticated, signout } from '../../auth/helper/auth-data';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#ffffff" };
    } else {
      return { color: "#800080" };
    }
  };


const Menu = ({history}) => {
    return(
        <div className='header'>
        
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <ul className="options">
            <li>
            <Link style={currentTab(history, '/signin')} className='option' to='/signin'>
                SIGN IN
            </Link> 
            </li>
            
            {isAuthenticated() && (
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
            <Link style={currentTab(history, '/products')} className='option' to='/products'>
                SHOP
            </Link>
            </li>
            <li>
            <Link style={currentTab(history, '/about')} className='option' to='/about'>
                ABOUT
            </Link>
            </li>
            <li>
            <Link style={currentTab(history, '/contact')} className='option' to='/contact'>
                CONTACT US
            </Link>
            </li>
        
        </ul>
        </div>
      
    )
}

export default withRouter(Menu);