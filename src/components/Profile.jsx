import React from 'react'
import ReactTooltip from 'react-tooltip';
import { BigHead } from "@bigheads/core";
import { useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';

import { getRandomOptions } from '../utils/Avatar'
import { capitalize } from '../utils/Text';

// Todo: Add Logout Functionality

const Profile = () => {
    const username = useSelector((state) => state.auth.user);
    return (
        <div className="flex flex-col bg-white w-2/4 ml-4 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center w-full">
                <BigHead className="w-48 h-48 cursor-pointer scale-125" {...getRandomOptions()} />
                <h1 className=" bg-white p-2 rounded-lg text-2xl font-serif text-center z-50">{capitalize(username)}</h1>
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
                <p data-tip="Log out">
                    <BsThreeDots className="w-12 h-12 p-2 cursor-pointer text-gray-400" />
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
