import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat';
import PageNotFound from './pages/PageNotFound';
import { Private } from './utils/Private/Private';
import { refreshToken } from './api';
import { refreshToken as refreshAction } from './redux/auth';
import Homepage from './pages/Homepage';


const App = () => {
  const dispatch = useDispatch();  
  
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
        <Route path="/chat" element={<Private component={Chat} />}/> 
        <Route path="*" element={<PageNotFound/> }/> 
      </Routes>
    </Router>
  )
}

export default App;
