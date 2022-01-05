import React from 'react'
import { FaSearch } from 'react-icons/fa';
import ChatList from './Chatlist';


const Conversations = () => {
    return (
        <div className="hidden xl:block bg-white overflow-y-auto w-1/5 h-full shadow-lg rounded-lg p-2 scroll-smooth scrollbar-hide">
            <div className="sticky -top-2 z-50 p-2 bg-white">
                <h1 className="text-xl text-center font-serif">Chat</h1>
                <div className="h-[1px] bg-blue-300 my-2"/>
                {/* Search Bar */}
                <div className="flex justify-center items-center bg-gray-300 border rounded-lg p-2">
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
            </div>
        </div>
    )
}

export default Conversations
