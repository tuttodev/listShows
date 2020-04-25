import axios from 'axios';
import jwt from 'jsonwebtoken';

export const getToken = () => localStorage.token;

export const setToken = token => localStorage.setItem('token', token);

export const deleteToken = () => delete localStorage.token;

export const setAutoritationToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export const getCurrentUser = () => {
    const token = getToken();
    if(token){
        return jwt.decode(token);
    }else{
        return null;
    }
}

export const logOut = history => {
    deleteToken();
    history.push('/');
}