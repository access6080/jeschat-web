import React from 'react';
import FriendsList from '../components/FriendsList';

import LogoBar from '../components/LogoBar';
import RecentCalls from '../components/RecentCalls';
import Profile from '../components/Profile';

const Dashboard = () => {

    return (
        <div className="blue-glassmorphism w-screen h-screen overflow-auto">
            <LogoBar classProps='h-3/20'/>

            <div className="flex justify-center h-4/5 p-2 ">
                <div className="flex w-4/5">
                    {/* Friends List */}
                    <FriendsList />

                    <div className="flex flex-col first:h-full w-full">
                        <div className="flex w-full h-2/4 ml-4">
                            {/* Recent Calls */}
                            <RecentCalls />

                            {/* Profile */}
                            <Profile/>
                        </div>
                        {/* Recent Message */}
                        <div className="w-full h-2/4 bg-white ml-4 mt-2 rounded-lg shadow-lg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
