import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LogoBar from '../components/LogoBar';


const PageNotFound = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const navigate = useNavigate();

    return (
        <div className="blue-glassmorphism h-screen w-screen overflow-auto scrollbar-hide">
            <LogoBar />
            <div className="flex flex-col items-center justify-center pt-10 h-3/5 w-full  ">
                <h1 className="text-6xl font-serif">404 Page Not Found!</h1>

                {
                    (isAuthenticated) && 
                    <div className="flex justify-center pt-4 w-full">
                        <div className="p-2 cursor-pointer hover:underline hover:underline-offset-2" onClick={() => navigate("/dashboard")}>
                            <p className="text-lg">Go to Dashboard</p>
                        </div>
                    </div>
                }
                {
                    (!isAuthenticated) && 
                    <div className="flex justify-center pt-4 w-full">
                        <div className="p-2 cursor-pointer hover:underline hover:underline-offset-2" onClick={() => navigate("/")}>
                            <p className="text-lg">Login</p>
                        </div>
                    </div>
                }
            
            </div>
        </div>
    )
}

export default PageNotFound
