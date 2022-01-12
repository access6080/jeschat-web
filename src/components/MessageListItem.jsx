import React from 'react';
import { BigHead } from "@bigheads/core";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { truncate } from '../utils/Text';


const MessageListItem = () => {
    const avatarOption = useSelector((state) => state.auth.avatar);
    const navigate = useNavigate();

    const isOpen = true;
    const message = truncate(" Hello, Hello, How're you doing lorem?Hello, How're you doing lorem hell, How're you doing lorem hell");
    const createdAt = "Monday";
    const username = "Boruto"

    return (
        <div className="flex w-full justify-between items-center p-2 cursor-pointer hover:bg-gray-100" onClick={() => navigate("/chat")}>
            <div className="flex">
                {/* User Avatar */}
                <BigHead className="w-12 h-12 cursor-pointer" {...avatarOption}/>

                {/* Message */}
                <div className="flex flex-col justify-start items-start ml-4">
                    <h1 className="text-xl font-serif"> {username} </h1>
                    <p className="text-base font-serif text-muted text-gray-400 hover:text-clip">
                       {message}
                    </p>                        
                </div>
            </div>
            {/* Timestamp and New Message Indicator */}
            <div className="flex flex-col">
                <p className="text-xs font-serif text-muted text-gray-400">{createdAt}</p>
                
                {(isOpen) &&
                    <div className="h-3 w-3 rounded-full shadow-2xl shadow-red-800 bg-blue-300  ml-6 mt-2" />
                }
            </div>
        </div>
    )
}

export default MessageListItem
