import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LogoBar from '../components/LogoBar'
import Conversations from '../components/Conversations';
import ControlCenter from '../components/ControlCenter';
import ChatContainer from '../components/ChatContainer';

import { getUser } from '../api';


const Chat = () => {
    const [userData, setUserData] = useState();
    const [room, setRoom] = useState('');
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();
    const recipient = window.location.href.split("/")[4];


    useEffect(() => {
        let isMount = true;
        const fetchRecipient = async () => {
            const recipientData = await getUser({ token, name: recipient });
            if (isMount) {
                setUserData(recipientData.data.response.user);
                setRoom(recipientData.data.response.room);
            }
        }

        if (!token) navigate('/');
        if (token) fetchRecipient()
        
        return () => { isMount = false };
    }, [recipient, token, navigate]);


    return (
        <>
            <div className="blue-glassmorphism h-screen w-screen overflow-auto scrollbar-hide">
                <LogoBar classProps='h-3/20'/>

                <div className="flex justify-between p-2 items-start h-4/5 ">
                    <Conversations />
                    <ChatContainer name={userData?.username} avatar={userData?.avatar} room={room}/>
                    <ControlCenter name={ userData?.username }/>
                </div>
            </div>
        </>
    )
}

export default Chat
