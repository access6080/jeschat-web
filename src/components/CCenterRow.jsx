import React, { useState } from 'react';

import SearchModal from './SearchModal';

const CCenterRow = ({ Icon, title, bg, disabled, diff = false, searchable = false }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        if (searchable) {
            setIsOpen(true)
        }
    }
    return (
        <> 
            <div className={`flex items-center space-x-2 p-4 rounded-xl ${(disabled) ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'}`} onClick={handleClick}>
                <div className={`${bg}  p-1 rounded-full `}>
                    {<Icon className="w-30 h-30 "/>}
                </div>
                <h1 className={`${(diff) ? 'text-sm' : 'text-lg'} lg:flex hidden font-serif`}>{ title }</h1>
            </div>
            <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default CCenterRow
