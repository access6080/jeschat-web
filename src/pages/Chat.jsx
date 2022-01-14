import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import LogoBar from '../components/LogoBar'
import Conversations from '../components/Conversations';
import ControlCenter from '../components/ControlCenter';
import ChatContainer from '../components/ChatContainer';

import { getUser } from '../api';


const Chat = () => {
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.auth.token)
    const recipient = window.location.href.split("/")[4];


    useEffect(() => {
        const fetchRecipient = async () => {
            const response = await getUser({ token, name: recipient });
            console.log(response);
        }

        if(token) fetchRecipient();
    });


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
