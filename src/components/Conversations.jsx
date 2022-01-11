import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';

import ChatList from './ChatList';
import CCenterRow from './CCenterRow';


const Conversations = () => {
    return (
        <div className="hidden xl:block glass overflow-y-auto w-1/5 h-full shadow-lg rounded-lg p-2 scroll-smooth scrollbar-hide">
            <div className="">
                <h1 className="text-xl text-center font-serif">Chat</h1>
                <div className="h-[1px] bg-blue-300 my-2"/>
                {/* Search Bar */}
                <div className="flex justify-center items-center border rounded-lg p-2 ">
                    <FaSearch className="mr-2"/>
                    <input
                        type="search"
                        placeholder="Search"
                        className="border-none outline-none bg-transparent w-full rounded-lg placeholder:text-black mt-2"
                    />
                </div>
            </div>
            {/* ChatList */}
            <div className="mt-2">
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
            <div className="hidden lg:flex justify-center items-center sticky -bottom-4 z-50 p-2 bg-white bg-clip-padding bg-opacity-100">
                <CCenterRow title="Start A Conversation" Icon={BsPencilSquare} diff/>
            </div>
            {/* <div className="flex lg:hidden justify-center items-center w-10 h-10">
                <BsPencilSquare />
            </div> */}
        </div>
    )
}

export default Conversations
