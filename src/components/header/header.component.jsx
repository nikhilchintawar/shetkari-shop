import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.css';

// import { ReactComponent as Logo} from '../../assets/farmer.svg';



const Header = () => {
    return(
        <div className='header'>
        <div className="options">
            <Link className='option' to='/signin'>
                Sign In
            </Link>
            <Link className='option' to='/products'>
                Products
            </Link>
            <Link className='option' to='/about'>
                About
            </Link>
        </div>    
        </div>
    )
}

export default Header;