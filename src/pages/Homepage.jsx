import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthModal from '../components/AuthModal';
import LogoBar from '../components/LogoBar';

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [authState, setAuthState] = useState(''); 
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const handleClick = (e) => {
        setIsOpen(true);
        setAuthState(e.target.innerText);
    }


    return (
        <>
            <div className="blue-glassmorphism h-screen w-screen overflow-auto">
                <LogoBar classProps="h-1/3"/>

                <div className="flex justify-center items-start pt-10 h-3/5 w-full ">
                    <div className={`flex flex-col bg-transparent shadow-2xl md:w-2/4 h-max rounded-lg p-2 transition ease-in duration-500 ${(isOpen) && 'opacity-0 ease-in duration-500'}`}>
                        <ReactTypingEffect
                            className="text-center"
                            text={[' Welcome to Jeschat']}
                            cursorRenderer={cursor => <h1 className="text-xl md:text-3xl">{cursor}</h1>}
                            displayTextRenderer={(text, i) => { 
                                return (
                                    <h1 className="text-xl md:text-3xl text-center font-serif" key={i}>{ text }</h1> 
                                )
                            }}
                        >
                        </ReactTypingEffect>
                        <ReactTypingEffect
                            className="text-center"
                            text={['By Jemak','By Students For Students']}
                            cursorRenderer={cursor => <h1 className="text-xl md:text-3xl">{cursor}</h1>}
                            displayTextRenderer={(text, i) => { 
                                return (
                                    <p className="text-md md:text-xl text-center font-serif p-2" key={i}>A Chat App built { text }</p> 
                                )
                            }}
                        >
                        </ReactTypingEffect>

                        <div className="w-full h-[1px] bg-[#2D9D96]"/>

                        { (!isAuthenticated) &&
                            <div className="flex justify-center pt-4 w-full">
                                <div className="p-2 cursor-pointer hover:underline hover:underline-offset-2" onClick={handleClick}>
                                    <p className="text-lg">Login</p>
                                </div>
                                <div className="p-2 cursor-pointer hover:underline hover:underline-offset-2" onClick={handleClick}>
                                    <p className="text-lg">Sign Up</p>
                                </div>
                            </div>
                        }
                        {
                            (isAuthenticated) && 
                            <div className="flex justify-center pt-4 w-full">
                                <div className="p-2 cursor-pointer hover:underline hover:underline-offset-2" onClick={() => navigate("/dashboard")}>
                                    <p className="text-lg">Go to Dashboard</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center p-2 h-auto">
                    <p className="text-sm"> © Jeschat 2022 All rights reserved</p>
                    <p className="text-sm"> Website by Jemak</p>
                </div>
            </div>
            <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} authState={authState}/>
        </>
    )
}

export default Homepage
