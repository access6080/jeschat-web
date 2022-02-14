import React from 'react';
import { BsMicMuteFill } from 'react-icons/bs';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const RecipientVideo = () => {
    const navigate = useNavigate();

    return (
        <div className="absolute flex justify-evenly items-center bg-black w-48 h-16 bottom-10 rounded-full text-white shadow-2xl">
            <div className="cursor-pointer bg-blue-500 hover:bg-blue-400 p-4 rounded-full">
                <BsMicMuteFill />
            </div>
            <div className="cursor-pointer bg-red-500 hover:bg-red-400 p-4 rounded-full" onClick={() => navigate('/dashboard')}>
                <HiOutlinePhoneMissedCall />
            </div>

        </div>
    );
};

export default RecipientVideo;
