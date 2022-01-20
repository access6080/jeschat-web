import React from 'react'
// import MessageListItem from './MessageListItem'

const RecentMessages = () => {
    return (
        <div className="w-full h-2/4 glass ml-4 mt-2 rounded-lg shadow-lg overflow-y-auto scroll-smooth scrollbar-hide">
            <div className="flex justify-center items-center w-full h-full">
                <h1 className="text-center font-serif text-xl text-gray-400">You have no messages!!</h1>
            </div>
        </div>
    )
}

export default RecentMessages
