import React from 'react'

import LogoBar from '../components/LogoBar'
import Conversations from '../components/Conversations';
import ControlCenter from '../components/ControlCenter';
import ChatContainer from '../components/ChatContainer';

const Chat = () => {
    return (
        <>
            <div className="blue-glassmorphism h-screen w-screen overflow-auto">
                <LogoBar classProps='h-3/20'/>

                <div className="flex justify-between p-2 items-start h-4/5 ">
                    <Conversations />
                    <ChatContainer />
                    <ControlCenter />
                </div>
            </div>
        </>
    )
}

export default Chat
