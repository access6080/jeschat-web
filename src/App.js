import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage'
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Homepage/> }/>
        <Route path="/chat" element={ <Chat/> }/>
      </Routes>
    </Router>
  )
}

export default App;
