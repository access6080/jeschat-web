import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Message from './Message'
import { getMessages } from '../api';

const MessageList = ({ messages, name, room}) => {
    const messagesEndRef = useRef(null);
    const [chat, setChat] = useState([]);
    const token = useSelector((state) => state.auth.token)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    useEffect(scrollToBottom, [messages]);
    useEffect(() => {
        let isMount = true;

        const fetchMessages =  async () => {
            const { data } = await getMessages({ token, room });
            if (isMount) setChat((chat) => [...data.response, ...chat])
        }

        if (token && room) fetchMessages();
        return () => { isMount = false };
    }, [room, token])

    console.log(chat)
    return (
        <div className="flex flex-col justify-end w-full h-4/5 rounded-xl overflow-y-auto scroll-smooth scrollbar-hide">
            {/* {
                (chat) && chat.map((messageObj, key) =>
                    <Message key={key} message={messageObj.text} name={messageObj.sender}/>
            )} */}
            {
                messages.map((message, key) =>
                    <Message key={key} message={message} name={name} />)
            }
            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessageList
