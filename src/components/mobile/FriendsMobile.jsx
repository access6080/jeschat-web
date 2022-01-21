import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';

import Friends from '../Friends'
import CCenterRow from '../CCenterRow'

const FriendsMobile = () => {
    return (
        <div className="glass w-5/6 h-[200px] rounded-lg mx-auto mt-4 shadow-lg overflow-y-auto scroll-smooth scrollbar-hide">
            <div className="sticky -top-2 z-10 p-2 ">
                <h1 className="text-xl text-center font-serif">Friends</h1>
                <div className="h-[1px] bg-blue-300 my-2"/>                
            </div>
            <Friends mobile />
            
            <div className="flex justify-center items-center sticky -bottom-4 p-2 " >
                <CCenterRow title={"Start A Conversation"} diff Icon={BsPencilSquare} searchable />
            </div>
        </div>
    );
};

export default FriendsMobile;
