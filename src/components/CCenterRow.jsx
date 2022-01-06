import React from 'react'

const CCenterRow = ({Icon, title, bg, disabled}) => {
    return (
        <div className={`flex items-center space-x-2 p-4  rounded-xl ${(disabled) ? 'cursor-not-allowed' :'cursor-pointer hover:bg-gray-200'}`}>
            <div className={`${bg} p-1 rounded-full`}>
                {<Icon className="w-30 h-30 "/>}
            </div>
            <h1 className="text-lg font-serif">{ title }</h1>
        </div>
    )
}

export default CCenterRow
