import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';

import CCenterRow from './CCenterRow';
import Friends from './Friends';


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
            <div className="flex flex-col w-full h-full justify-between">
                {/* ChatList */}
                <div className="mt-2">
                    <Friends/>
                </div>
                <div className="hidden lg:flex justify-center items-center sticky -bottom-4 z-50 p-2 bg-white bg-clip-padding bg-opacity-100">
                    <CCenterRow title="Start A Conversation" Icon={BsPencilSquare} diff searchable/>
                </div>
            </div>
        </div>
    )
}

export default Conversations
