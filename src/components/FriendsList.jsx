import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';

import CCenterRow from './CCenterRow';
// import Friends from './Friends';
// import ChatList from './ChatList';

const FriendsList = () => {
    return (
        <div className="glass w-1/3 h-full rounded-lg shadow-lg overflow-y-auto scroll-smooth scrollbar-hide">
            <div className="sticky -top-2 z-50 p-2 ">
                <h1 className="text-xl text-center font-serif">Friends</h1>
                <div className="h-[1px] bg-blue-300 my-2"/>                
            </div>
            <div className="flex flex-col h-full justify-between">
                <div className="mt-2"> 
                    {/* <Friends /> */}
                </div>

                <div className="flex justify-center items-center sticky -bottom-4 z-50 p-2 bg-white bg-clip-padding bg-opacity-100" >
                    <CCenterRow title={"Start A Conversation"} diff Icon={BsPencilSquare} searchable />
                </div>
            </div> 
        </div>
    )
}

export default FriendsList;
