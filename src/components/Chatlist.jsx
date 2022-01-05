import React from 'react';

import avatar from "../images/avatar.jpg"

const Chatlist = () => {
    return (
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2 mt-2">
            {/* Profile Image */}
            <img src={avatar} alt='profile' className='h-10 w-10 rounded-full items-start' />
            <div  className="flex justify-center w-full">
                {/* Username */}
                <h1 className="text-xl font-serif text-center">Boruto</h1>
                {/* Active Status */}
                <div className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-lime-100 animate-bounce"/>
            </div>
        </div>
    )
}

export default Chatlist
