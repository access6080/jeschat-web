import React from 'react';


const MyVideo = ({myVideo}) => {
    
    return (
        <div className="absolue rounded-xl shadow-2xl w-48 h-48 bottom-4 right-4 z-40">
            <video muted autoPlay playsInline ref={ myVideo } className="w-48 h-48"/>
        </div>
    );
};

export default MyVideo;
