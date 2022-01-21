import React from 'react';

const Call = () => {
    
    // Todo: Add overflow-y-auto to ClassName

    return (
        <div className="glass w-5/6 h-[250px] rounded-lg mx-auto mt-4 shadow-lg scroll-smooth scrollbar-hide">
            <div className="sticky -top-2 z-50 p-2 ">
                <h1 className="text-xl text-center font-serif">Video Chat</h1>
                <div className="h-[1px] bg-blue-300 my-2"/>                
            </div>
            <div className="flex items-center justify-center h-full">
                <h1 className="text-xl text-center font-serif"> Video Chat coming soon</h1>
            </div>
        </div>
    );
};

export default Call;
