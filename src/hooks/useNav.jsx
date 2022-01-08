import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {useEffect} from 'react'


const useNav = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const navigation = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) return navigation('/');
    })
}

export default useNav;

