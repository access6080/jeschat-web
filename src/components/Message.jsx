import React from 'react'

const Message = ({ message: {username, message}, name }) => {
    let isCurrentUser = false;
    let isAdmin = false

    const trimmedName = name.trim().toLowerCase();
    if(username === 'ADMIN') isAdmin = true;

    if (trimmedName === username) isCurrentUser = true;

    if (isAdmin) {
        return (
            <div className="flex items-center justify-center m-2 ">
                <p className="text-xl font-serif text-muted text-gray-600">{message}</p>
            </div>
        )
    }
    
    return (
        <div className="m-2">
            { 
                (isCurrentUser & !isAdmin)
                ?
                (<div className="flex justify-end">
                    <div className="bg-white p-2 rounded-2xl shadow-xl">
                        {message}
                    </div>
                </div>)
                :
                (<div className="flex justify-start">
                    <div className="flex flex-col mt-2 bg-blue-300 p-2 rounded-2xl w-max shadow-xl">{message}</div>
                </div>)
            }
        </div>
    )
}

export default Message
