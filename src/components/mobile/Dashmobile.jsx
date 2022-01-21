import React from 'react';
import ReactTooltip from 'react-tooltip';
import { BigHead } from "@bigheads/core";
import { useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
// import { BsChevronUp } from 'react-icons/bs';
// import { Disclosure } from '@headlessui/react'

import LogoBar from '../LogoBar';
import FriendsMobile from './FriendsMobile';
import Call from './Call';
import { capitalize } from '../../utils/Text';
import { logout } from '../../api';

const Dashmobile = () => {
    const username = useSelector((state) => state.auth.user);
    const avatarOption = useSelector((state) => state.auth.avatar);
    const friends = useSelector((state) => state.auth.friends);

    const handleLogout = async () => {
        await logout();
        window.location.reload();
    }

    return (
        <div className="blue-glassmorphism w-screen h-screen overflow-auto scrollbar-hide"> 
            <LogoBar classProps='h-3/20' />
            
            {/* Profie */}
            <div className="flex flex-col glass w-5/6 rounded-lg mx-auto shadow-lg">
                <div className="flex flex-col justify-center items-center w-full">
                    <BigHead className="w-24 h-24 cursor-pointer scale-125 hover:scale-150" {...avatarOption} />
                    <h1 className=" mt-2 p-2 rounded-lg text-2xl font-serif text-center">{capitalize(username)}</h1>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex justify-center space-x-2">
                        <h1 className="text-xl text-muted text-gray-400 font-serif">Friends</h1>
                        <p className="text-xl text-muted text-gray-400">{friends || 0}</p>
                    </div>
                    <div className="flex justify-center space-x-2">
                        <h1 className="text-xl text-muted text-gray-400 font-serif text-center">Groups</h1>
                        <p className="text-xl text-muted text-gray-400">{0}</p>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <p data-tip="Log out" onClick={handleLogout}>
                        <BsThreeDots className="w-8 h-8 p-2 cursor-pointer text-gray-400" />
                    </p>
                    <ReactTooltip
                        place="bottom"
                        type="info"
                        backgroundColor="white"
                        textColor="black"
                        border
                        borderColor="black"
                    />
                </div>
            </div>

            {/* Friends */}
            <FriendsMobile />

            {/* Video Chat */}
            <Call />
        </div>
    )
};

export default Dashmobile;
