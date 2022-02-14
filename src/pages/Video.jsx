import VideoPlayer from '../components/VideoPlayer';

const Video = () => {
    const room = window.location.href.split("/")[4];

    return (
        <VideoPlayer room={room}/>
    );
};

export default Video;