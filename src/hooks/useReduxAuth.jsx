import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshToken } from '../api';
import { refreshToken as refreshAction } from '../redux/auth';


export const useReduxAuth = () => {
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
};