import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import FriendsList from '../components/FriendsList';
import LogoBar from '../components/LogoBar';
import RecentCalls from '../components/RecentCalls';
import Profile from '../components/Profile';

const Dashboard = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate('/');
        }
    });
    
    return (
        <div className="blue-glassmorphism w-screen h-screen overflow-auto">
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
                        <div className="w-full h-2/4 glass ml-4 mt-2 rounded-lg shadow-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard
