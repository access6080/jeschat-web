import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';

import CCenterRow from './CCenterRow';
import ChatList from './ChatList';

const FriendsList = () => {
    return (
        <div className="bg-white w-1/3 h-full rounded-lg shadow-lg overflow-y-auto scroll-smooth scrollbar-hide">
            <div className="sticky -top-2 z-50 p-2 bg-white">
                <h1 className="text-xl text-center font-serif">Friends</h1>
                <div className="h-[1px] bg-blue-300 my-2"/>                
            </div>

            <div className="mt-2">
                <h1 className="text-base font-serif text-center hidden"> You Have No Friends!!</h1>
                <ChatList />
                <ChatList />
                <ChatList />  
                <ChatList />
                <ChatList />
                <ChatList />    
                <ChatList />
                <ChatList />
                <ChatList />    
                <ChatList />
                <ChatList />
                <ChatList />    
            </div>

            <div className="sticky -bottom-4 z-50 p-2 bg-white">
                <CCenterRow title="Start A Conversation" Icon={BsPencilSquare} />
            </div>
        </div>
    )
}

export default FriendsList;
