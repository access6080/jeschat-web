import { createContext } from 'react';

const ModalContext = createContext({
    isOpen: false,
    setIsOpen: (isOpen) => { },
    authState: '',
    setAuthState: (authState) => {},
});

export default  ModalContext;