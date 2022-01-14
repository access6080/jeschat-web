import React from 'react'
import ReactTooltip from 'react-tooltip';
import { BigHead } from "@bigheads/core";
import { useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';

import { capitalize } from '../utils/Text';
import { logout } from '../api';

// Todo: Add Logout Functionality

const Profile = () => {
    const username = useSelector((state) => state.auth.user);
    const avatarOption = useSelector((state) => state.auth.avatar);

    const handleLogout = async () => {
        await logout();
        window.location.reload();
    }

    return (
        <div className="flex flex-col glass w-2/4 ml-4 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col justify-center items-center w-full">
                <BigHead className="w-48 h-48 cursor-pointer scale-125" {...avatarOption} />
                <h1 className=" mt-2 p-2 rounded-lg text-2xl font-serif text-center">{capitalize(username)}</h1>
            </div>
            <div className="flex justify-evenly">
                <div className="flex justify-center space-x-2">
                    <h1 className="text-xl text-muted text-gray-400 font-serif">Friends</h1>
                    <p className="text-xl text-muted text-gray-400">{0}</p>
                </div>
                <div className="flex justify-center space-x-2">
                    <h1 className="text-xl text-muted text-gray-400 font-serif text-center">Groups</h1>
                    <p className="text-xl text-muted text-gray-400">{0}</p>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <p data-tip="Log out" onClick={handleLogout}>
                    <BsThreeDots className="lg:w-12 lg:h-12 w-8 h-8 p-2 cursor-pointer text-gray-400" />
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
    )
}

export default Profile
