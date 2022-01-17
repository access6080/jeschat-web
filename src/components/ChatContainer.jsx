import React, { useState, useRef, useEffect } from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';
import { BigHead } from "@bigheads/core";
import { useSelector} from 'react-redux';


import EmojiInput from './EmojiInput';
import MessageList from './MessageList';
import { capitalize } from '../utils/Text';
import { socket, joinRoom, emitMessage } from '../functions/Chat';

const ChatContainer = ({avatar, name, room}) => {
    const [inputText, setInputText] = useState("");
    const [isdismissed, setIsdismissed] = useState(false);
    const [messageData, setMessageData] = useState([]);
    const username = useSelector((state) => state.auth.user)
    const inputRef = useRef(null);

    if (isdismissed) {
        inputRef.current.focus();
    }

    const sendMessage = (e) => {
        e.preventDefault();

        //  Send Socket to Server
        if(inputText.length) emitMessage(inputText)
        setInputText("")
    }

    useEffect(() => {
        let isMount = true;
        if(username) joinRoom(username, room)

        socket.on("newChat", ({ username, message }) => {
            if(isMount) setMessageData(messageData =>[...messageData, { username, message }])
        })

        return () => { isMount = false };
    }, [username, room])
    
    return (
        <div className="relative glass w-11/12 xl:w-2/4 h-full shadow-lg rounded-lg p-2 mx-auto overflow-auto">
            {/* Chat Header */}
            <div className="flex items-center">
                <BigHead className="w-10 h-10 cursor-pointer" {...avatar} />

                <div className="flex w-full justify-center">
                    <h1 className="text-xl font-serif text-center">{capitalize(name)}</h1>
                    <div className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-lime-100"/>
                </div>

                <div className="justify-end hover:scale-125 cursor-pointer">
                    <BsCameraVideoFill className="w-6 h-6 text-blue-400" />
                </div>
                
            </div>
            <div className="h-[1px] bg-blue-300" />

            {/* Chat  Screen */}
            <MessageList messages={messageData} name={username}/>

            {/* Chat Input Box */}
            <div className="flex w-full justify-between p-2 rounded-xl items-center space-x-6">
                <div className="w-11/12 ">
                    <form>
                        <input
                            autoFocus
                            ref={inputRef}
                            type="text"
                            value={inputText}
                            placeholder="Send Message"
                            onChange={(e) => setInputText(e.target.value).trim()}
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
