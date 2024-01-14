import React, { useEffect } from 'react';
import './_loginScreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../Redux/Reducers/authReducer';
import {useNavigate} from 'react-router-dom'

const LoginScreen = () => {
    const dispatch=useDispatch()
    const token=useSelector(state=>state.auth.accessToken);
    const handleLogin=()=>{
        dispatch(action())
    }
    const navigate=useNavigate();
    useEffect(()=>{
        if(token){
            navigate('/');
        }
    },[token]);
    return (
        <div className="login">
            <div className="loginContainer">
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="logo" />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen