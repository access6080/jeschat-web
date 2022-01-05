import React from 'react'
import { BsCameraVideoFill } from 'react-icons/bs';

import avatar from "../images/avatar.jpg"


const ChatContainer = () => {
    return (
        <div className="bg-white w-11/12 xl:w-2/4 h-full shadow-lg rounded-lg p-2 mx-auto">
            {/* Chat Header */}
            <div className="flex items-center">
                <img src={avatar} alt='profile' className='h-10 w-10 rounded-full justify-start' />
                <div className="flex w-full justify-center">
                    <h1 className="text-xl font-serif text-center">Boruto</h1>
                    <div className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-lime-100"/>
                </div>
                <div className="justify-end ">
                    <BsCameraVideoFill className="w-6 h-6 text-blue-400" />
                </div>
            </div>
            <div className="h-[1px] bg-blue-300 my-2" />

            {/* Chat  Screen */}
            <div className="w-full h-4/5 pb-2 rounded-xl blue-glassmorphism">
                
            </div>

            {/* Chat Input Box */}
            <div className="p-2 rounded-xl">
                <form>
                    <input
                        type="text"
                        placeholder="Send Message"
                        className="border-none outline-none bg-transparent w-full rounded-xl p-2 placeholder:text-black mt-1 ring-1 ring-blue-300"
                    />
                </form>
            </div>
        </div>
    )
}

export default ChatContainer
