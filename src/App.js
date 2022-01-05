import React, { useState } from 'react';
import Homepage from './pages/Homepage'
import ModalContext from './context/ModalContext';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authState, setAuthState] = useState(''); 
  
  return (
    <ModalContext.Provider value={{isOpen, setIsOpen, authState, setAuthState}}>
            <Homepage />
    </ModalContext.Provider> 
  )
}

export default App;
