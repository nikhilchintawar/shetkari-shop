import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.css';


// import { ReactComponent as Logo} from '../../assets/farmer.svg';



const Header = () => {
    return(
        <div className='header'>
        <div className="options">
        
            <Link className='option' to='/signin'>
                SIGN IN
            </Link> 
            <Link className='option' to='/products'>
                SHOP
            </Link>
            <Link className='option' to='/about'>
                ABOUT
            </Link>
            <Link className='option' to='/contact'>
                CONTACT US
            </Link>
        </div>    
        </div>
    )
}

export default Header;