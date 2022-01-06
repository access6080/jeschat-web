import React, { useState, useRef } from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';

import EmojiInput from './EmojiInput';
import MessageList from './MessageList';
import avatar from "../images/avatar.jpg"


const ChatContainer = () => {
    const [inputText, setInputText] = useState("");
    const [isdismissed, setIsdismissed] = useState(false);
    const inputRef = useRef(null);

    if (isdismissed) {
        inputRef.current.focus();
    }

    const sendMessage = (e) => {
        e.preventDefault();

        //  Send Socket to Server
        // console.log({ inputText });
        setInputText("")
    }

    return (
        <div className="relative bg-white w-11/12 xl:w-2/4 h-full shadow-lg rounded-lg p-2 mx-auto">
            {/* Chat Header */}
            <div className="flex items-center">
                <img src={avatar} alt='profile' className='h-10 w-10 rounded-full justify-start cursor-pointer' />

                <div className="flex w-full justify-center">
                    <h1 className="text-xl font-serif text-center">Boruto</h1>
                    <div className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-lime-100"/>
                </div>

                <div className="justify-end hover:scale-125 cursor-pointer">
                    <BsCameraVideoFill className="w-6 h-6 text-blue-400" />
                </div>
                
            </div>
            <div className="h-[1px] bg-blue-300 my-2" />

            {/* Chat  Screen */}
            <MessageList />

            {/* Chat Input Box */}
            <div className="flex w-full jsutify-between p-2 rounded-xl items-center space-x-6">
                <div className="w-11/12 ">
                    <form>
                        <input
                            autoFocus
                            ref={inputRef}
                            type="text"
                            value={inputText}
                            placeholder="Send Message"
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={event => event.key === 'Enter' && sendMessage(event)}
                            className="border-none outline-none bg-transparent w-full rounded-xl p-2 placeholder:text-black mt-1 ring-1 ring-blue-300"
                        />
                    </form>
                </div>
                <EmojiInput value={inputText} setInputText={setInputText} setIsdismissed={setIsdismissed}/>
            </div>
        </div>
    )
}

export default ChatContainer
