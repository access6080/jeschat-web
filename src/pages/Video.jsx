import { useEffect, useRef, useState } from 'react';
import Peer from "simple-peer";

import MyVideo from '../components/MyVideo';
import VideoMenuBar from '../components/VideoMenuBar';



const Video = ({ userVideo }) => {
    const myVideo = useRef();
    const recipientVideo = useRef();
    const [stream, setStream] = useState();
    const [videoWidth, setVideoWidth] = useState();
    const [videoHeight, setVideoHeight] = useState();
    
    useEffect(() => {
        let isMount = true;
        if (isMount) {
            setVideoWidth(window.screen.width);
            setVideoHeight(window.screen.height);
        }

        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setStream(stream);
            if (myVideo.current) {
                myVideo.current.srcObject = stream;
            }
        });

        return () => {
            isMount = false;
        };
    }, [])

    let UserVideo;
    if (stream) {
        UserVideo = (
            <video playsInline muted ref={myVideo} autoPlay className='absolute rounded-2xl w-64 h-48 shadow-2xl bottom-4 right-4' />
        );
    }

    let RecipientVideo;
    if (stream) {
        RecipientVideo = (
            <video playsInline ref={recipientVideo} autoPlay width={videoWidth} height={videoHeight} />
        );
    }

    const peer = new Peer({ initiator: false, trickle: false, stream });

    
    return (
        <div className="flex justify-center items-center bg-black h-screen w-screen overflow-auto scroll-smooth scrollbar-hide">
            {true ?
                <h1 className="text-center text-white font-serif text-xl">Waiting for participants...</h1>
                :
                { RecipientVideo }
            }

            <MyVideo video={UserVideo} />
            <VideoMenuBar />
        </div>
    );
};

export default Video;
