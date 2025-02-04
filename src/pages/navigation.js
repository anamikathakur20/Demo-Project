import React from 'react';
import { Link, resolvePath, useMatch, useResolvedPath } from 'react-router-dom';
import './navigation.css';
import Footer from './footer';

function Navbar() {
    const path = window.location.pathname
    return(
        <>
        <nav className="nav">
            <Link to='/' className='site-title'>
                Welcome to Ayansh World
            </Link>
            <ul>
                <CustomLink to='home'>Home</CustomLink>
                <CustomLink to='login'>Login</CustomLink>
                <CustomLink to='signup'>Sign Up</CustomLink>
                <CustomLink to='aboutus'>About Us</CustomLink>
                <CustomLink to='contactus'>Contact Us</CustomLink>
            </ul>
            
        </nav>
        {/* <Footer/> */}
        </>
    )
}

function CustomLink( {to, children, ...props}) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true})
return(
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>                    
    </li>
)
}


export default Navbar;