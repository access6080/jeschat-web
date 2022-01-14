import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { BigHead } from "@bigheads/core";

import { search } from '../api';
import { capitalize } from '../utils/Text';

const SearchModal = ({ isOpen, setIsOpen }) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleSearch = async (e) => {
        setQuery(e.target.value);
    
        if (query.length >= 2) {
            try {
                const { data } = await search(query);
                setResults(data.response);
            } catch (error) {}
        }
    };

    const handleClose = () => {
        setQuery('')
        setIsOpen(false)
        setResults([])
    }


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={handleClose}
                >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in duration-500"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-500"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                            as="h3"
                            className="text-xl font-medium leading-6 text-gray-900 text-center"
                            >
                            Start A Conversation
                        </Dialog.Title>
                        <div className="mt-2">
                            <input
                                    type="Search"
                                    autoComplete='off'
                                    autoFocus
                                    name="query"
                                    className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black"
                                    placeholder="Enter a username..." 
                                    onChange={handleSearch}
                            />       
                        </div>
                        <div className="flex flex-wrap">
                            {results.map((user, key) =>
                                <div key={key} className="p-2 mt-2 flex flex-col justify-center items-center rounded-xl hover:bg-gray-300 cursor-pointer">
                                    <BigHead className="w-12 h-12 cursor-pointer" {...user.avatar}/>
                                    <h1>{ capitalize(user.username) }</h1>
                                </div>
                            )}
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default SearchModal
