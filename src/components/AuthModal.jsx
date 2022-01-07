import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux';

import { login, signup } from '../redux/auth';


 

const AuthModal = ({ isOpen, setIsOpen, authState }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { username, password };
        if (authState === "Sign Up") formData['confirmPassword'] = confirmPassword; 
        
        // Handle form submission
        switch (authState) {
            case 'Sign Up':
                dispatch(signup(formData));
                break;
            case 'Login':
                dispatch(login(formData));
                break;
            default:
                break;
        }
        setIsOpen(false)
    }

    //TODO: Add Form Validation
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => setIsOpen(false)}
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
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl rounded-2xl">
                        <Dialog.Title
                            as="h3"
                            className="text-xl font-medium leading-6 text-gray-900 text-center"
                            >
                            {authState}
                        </Dialog.Title>
                        <div className="mt-2">
                            <form onSubmit={handleSubmit} noValidate>
                                    <input
                                            type="text"
                                            name="username"
                                            className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black"
                                            placeholder="Username" 
                                            onChange={(e) => setUsername(e.target.value)}
                                    />       
                                    <input
                                            type="password"
                                            name="password"
                                            className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black mt-2"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                    />      

                                {
                                (authState === "Sign Up") && 
                                    <input
                                            type="password"
                                            name="confirmPassword"
                                            className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black mt-2"
                                            placeholder="Confirm Password" 
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                }
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black underline  hover:ring-1 hover:ring-black hover:rounded-lg "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AuthModal
