import React from 'react';
import logo from '../images/logo.png';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LogoBar = ({ classProps }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const navigate = useNavigate();

    const handleClick = () => {
        if (isAuthenticated) {
            return navigate('/dashboard');
        }
        return navigate('/')
    }

    return (
        <div className={`w-full flex justify-center items-start ${classProps}`}  onClick={handleClick}>  
            <img className="m-2 w-16 h-auto cursor-pointer drop-shadow-2xl rotate" src={logo} alt='logo' />
        </div>
    )
}

export default LogoBar;
