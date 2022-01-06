import React, { useState, useRef, useCallback } from 'react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';


import useClickOutside from '../hooks/useClickOutside';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const EmojiInput = ({value, setInputText, setIsdismissed}) => {
    const picker = useRef(null)
    const [toggleEmoji, setToggleEmoji] = useState(false);

    const dismissPicker = useCallback(() => {
        setToggleEmoji(false);
     }, [setToggleEmoji]);

    useClickOutside([picker], dismissPicker);

    const handleClick = () => {
        setToggleEmoji(true);
    }

    const addEmoji = (emoji) => {
        if ("native" in emoji) {
            setInputText(`${value}${emoji.native}`);
            dismissPicker();
            setIsdismissed(true);
        }
    };

    return (
        <div ref={picker}>
            <div className="absolute right-0 bottom-0">
                {toggleEmoji && (
                    <Picker title="" emoji="" native={true} onSelect={addEmoji}/>
                )}
            </div>
            <div className="ml-4 cursor-pointer" onClick={handleClick}>
                <BsEmojiSmileUpsideDown className="h-7 w-7 hover:scale-125  hover:text-orange-300 hover:animate-spin"/>
            </div>
        </div>
    )
}

export default EmojiInput
