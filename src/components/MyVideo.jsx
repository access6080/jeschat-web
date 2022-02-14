const MyVideo = ({ video }) => {

    return (
        <>
            <video playsInline muted ref={video} autoPlay className='absolute rounded-2xl w-64 h-48 shadow-2xl bottom-4 right-4' />
        </>
    );
};

export default MyVideo;
