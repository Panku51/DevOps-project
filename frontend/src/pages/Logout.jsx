import { useEffect } from 'react';
import { logout } from '../context/actions';
import { useAuthDispatch } from '../context/context';

const Logout = (props) => {
    const dispatch = useAuthDispatch(); 
    useEffect(() => {
        console.log('signing out...');
        logout(dispatch);      
        props.history.push('/');
    }, [dispatch, props.history]);
