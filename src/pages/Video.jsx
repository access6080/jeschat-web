import React from 'react';

import MyVideo from '../components/MyVideo';
// import RecipientVideo from '../components/RecipientVideo';



const Video = ({ userVideo }) => {
    
    return (
        <div className="flex justify-center items-center blue-glassmorphism h-screen w-screen overflow-auto scroll-smooth scrollbar-hide">
            <div className="relative w-[90%] h-[95%] bg-black rounded-xl shadow-xl">
                <video muted autoPlay playsInline ref={ userVideo } className="w-[90%] h-[95%]"/>
                <MyVideo />
            </div>
        </div>
    );
};

export default Video;
