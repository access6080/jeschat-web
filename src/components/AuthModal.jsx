import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ModalContext from '../context/ModalContext'

const AuthModal = () => {
    const { isOpen, setIsOpen, authState } = useContext(ModalContext);

    const closeModal = (e) => {
        e.preventDefault();
        // handle form submission
        setIsOpen(false)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
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
                            <form>
                                    <input
                                        type="text"
                                        className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black"
                                        placeholder="Username" 
                                    />       
                                    <input
                                        type="password"
                                        className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black mt-2"
                                        placeholder="Password" 
                                    />      

                                {
                                    (authState === "Sign Up") && 
                                        <input
                                            type="password"
                                            className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black mt-2"
                                            placeholder="Confirm Password" 
                                        />
                                }
                                {
                                    (authState === "Sign Up") && 
                                        <input
                                            type="email"
                                            className="border-none outline-none bg-transparent ring-1 w-full p-2 rounded-lg placeholder:text-black mt-2"
                                            placeholder="Email" 
                                        />
                                }

                            </form>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black underline  hover:ring-1 hover:ring-black hover:rounded-lg "
                                onClick={closeModal}
                            >
                                Submit
                            </button>
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
