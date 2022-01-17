import React, { useRef, useEffect } from 'react';
import Message from './Message'

const MessageList = ({ messages, name }) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="w-full h-4/5 rounded-xl overflow-y-auto scroll-smooth scrollbar-hide">
            {
                messages.map((message, key) =>
                    <Message key={key} message={message} name={name} />)
            }
            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessageList
