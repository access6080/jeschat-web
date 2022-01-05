import React from 'react';
import logo from '../images/logo.png';


const LogoBar = ({ classProps }) => {
    return (
        <div className={`w-full flex justify-center items-start ${classProps} `}>  
            <img className="m-2 w-16 h-16 cursor-pointer" src={logo} alt='logo' />
        </div>
    )
}

export default LogoBar;
