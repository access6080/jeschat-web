import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BigHead } from "@bigheads/core";
import { useNavigate } from 'react-router-dom';

import { getPreviousConvo } from '../api';
import { capitalize } from '../utils/Text';
import ChatList from './ChatList';


const Friends = ({mobile= false}) => {
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token)  
    
    useEffect(() => {
        let isMount = true;
        const fetchFriends = async () => {
            const response = await getPreviousConvo(token);
            if(isMount) setFriends(response.data);
        }

        if (token) fetchFriends();
        return () => { isMount = false };
    },[token]);

    return (
        <> 
            {(!mobile) &&
                <div>
                {(friends.success === true) && 
                    friends.response.map((user, key) => 
                        <ChatList key={key} name={user.username} avatar={user.avatar} />
                    )
                }
                </div>
            }
            {(mobile) &&
                <div className="flex flex-wrap">
                   {(friends.success === true) && 
                    friends.response.map((user, key) => 
                        <div
                            key={key}
                            className="p-2 mt-2 flex flex-col justify-center items-center rounded-xl hover:bg-gray-300 cursor-pointer"
                            onClick={() => navigate(`/chat/${user.username}`)}
                        >
                            <BigHead className="w-12 h-12 cursor-pointer" {...user.avatar}/>
                            <h1>{ capitalize(user.username) }</h1>
                        </div>
                    
                    )
                } 
                </div>
            }
        </>
    )
}

export default Friends;
