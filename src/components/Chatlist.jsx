import React from 'react';
import { BigHead } from "@bigheads/core";
import { useNavigate } from 'react-router-dom';

import { capitalize } from '../utils/Text';


const Chatlist = ({avatar, name}) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2 mt-2" onClick={() => navigate(`/chat/${name}`)}>
            {/* Profile Image */}
            <div className="lg:w-12 lg:h-12  w-full flex justify-center">
                {/* <img src={avatar} alt='profile' className='h-10 w-10 rounded-full' /> */}
                <BigHead className="w-12 h-12 cursor-pointer" {...avatar} />
            </div>
            <div  className="hidden lg:flex justify-center w-full">
                {/* Username */}
                <h1 className="text-xl text-muted text-gray-500 font-serif text-center">{capitalize(name)}</h1>
                {/* Active Status */}
                <div className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-lime-100 animate-bounce"/>
            </div>
        </div>
    )
}

export default Chatlist
