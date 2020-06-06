import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './header.styles.css';


import { ReactComponent as Logo} from '../../assets/seeding.svg';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#ffffff" };
    } else {
      return { color: "#800080" };
    }
  };


const Header = ({history}) => {
    return(
        <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">       
            <Link style={currentTab(history, '/signin')} className='option' to='/signin'>
                SIGN IN
            </Link> 
            <Link style={currentTab(history, '/products')} className='option' to='/products'>
                SHOP
            </Link>
            <Link style={currentTab(history, '/about')} className='option' to='/about'>
                ABOUT
            </Link>
            <Link style={currentTab(history, '/contact')} className='option' to='/contact'>
                CONTACT US
            </Link>
        </div>    
        </div>
    )
}

export default withRouter(Header);