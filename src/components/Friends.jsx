import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPreviousConvo } from '../api';
import ChatList from './ChatList';


const Friends = () => {
    const [friends, setFriends] = useState([]);
    const token = useSelector((state) => state.auth.token)  
    
    useEffect(() => {
        const fetchFriends = async () => {
            const response = await getPreviousConvo(token);
            setFriends(response.data);
        }

        if (token) return fetchFriends();
    },[token]);

    return (
        <div>
            {(friends.success === true) && 
                friends.response.map((user, key) => 
                    <ChatList key={key} name={user.username} avatar={user.avatar} />
                )
            }
        </div>
    )
}

export default Friends;
