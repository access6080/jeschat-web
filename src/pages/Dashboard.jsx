import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import FriendsList from '../components/FriendsList';
import LogoBar from '../components/LogoBar';
import RecentCalls from '../components/RecentCalls';
import RecentMessages from '../components/RecentMessages';
import Profile from '../components/Profile';
import Dashmobile from '../components/mobile/Dashmobile'

const Dashboard = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [midScreen, setMidScreen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let isMount = true;
        const handleResize = () => {
            const screenSize = window.innerWidth;
            if (isMount) {
                if(screenSize <= 1024){
                    setMidScreen(true);
            } else {
                    setMidScreen(false);
            }}
        }

        if (!isAuthenticated) {
            return navigate('/');
        }
        window.addEventListener('resize', handleResize)

        return () => {
            isMount = false;
            window.removeEventListener('resize', handleResize);
        };
    }, [midScreen, setMidScreen, isAuthenticated, navigate]);
    
    return (
        <> 
            {
                (!midScreen) &&
                <div className="blue-glassmorphism w-screen h-screen overflow-auto scrollbar-hide">
                    <LogoBar classProps='h-3/20' />

                    <div className="flex justify-center h-4/5 p-2 ">
                        <div className="flex w-4/5">
                            {/* Friends List */}
                            <FriendsList />

                            <div className="flex flex-col h-full w-full">
                                <div className="flex w-full h-2/4 ml-4">
                                    {/* Recent Calls */}
                                    <RecentCalls />

                                    {/* Profile */}
                                    <Profile />
                                </div>
                                {/* Recent Message */}
                                <RecentMessages />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                (midScreen) && <Dashmobile/>
            }
        </>
    )

}

export default Dashboard
