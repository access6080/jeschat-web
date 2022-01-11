import React from 'react';
import { BigHead } from "@bigheads/core";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Chatlist = () => {
    const navigate = useNavigate();
    const avatarOptions = useSelector((state) => state.auth.avatar)

    return (
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2 mt-2" onClick={() => navigate("/chat")}>
            {/* Profile Image */}
            <div className="lg:w-12 lg:h-12  w-full flex justify-center">
                {/* <img src={avatar} alt='profile' className='h-10 w-10 rounded-full' /> */}
                <BigHead className="w-12 h-12 cursor-pointer" {...avatarOptions} />
            </div>
            <div  className="hidden lg:flex justify-center w-full">
                {/* Username */}
                <h1 className="text-xl text-muted text-gray-500 font-serif text-center">Boruto</h1>
                {/* Active Status */}
                <div className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-lime-100 animate-bounce"/>
            </div>
        </div>
    )
}

export default Chatlist
