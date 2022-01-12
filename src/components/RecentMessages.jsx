import React from 'react'
import MessageListItem from './MessageListItem'

const RecentMessages = () => {
    return (
        <div className="w-full h-2/4 glass ml-4 mt-2 rounded-lg shadow-lg overflow-y-auto scroll-smooth scrollbar-hide">
            <MessageListItem />
            <MessageListItem />
            <MessageListItem />
            <MessageListItem />
            <MessageListItem />
        </div>
    )
}

export default RecentMessages
