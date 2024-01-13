import React from 'react';
import './_loginScreen.scss';

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="loginContainer">
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="logo" />
                <button>Login With Google</button>
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen