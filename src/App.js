import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat';
import PageNotFound from './pages/PageNotFound';

import { refreshToken } from './api';
import { refreshToken as refreshAction } from './redux/auth';
import { renewToken } from './utils/Token';


const App = () => {
  const dispatch = useDispatch();
  renewToken();
  
  useEffect(() => {
    const apiCall = async () => {
      try {
        const { data } = await refreshToken();
        dispatch(refreshAction(data))
      } catch (error) {
      }
    }
    return apiCall();
  }, [dispatch])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/chat/:name" element={<Chat />}/> 
        <Route path="*" element={<PageNotFound/> }/> 
      </Routes>
    </Router>
  )
}

export default App;
