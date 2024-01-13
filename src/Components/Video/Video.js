import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

const Video = () => {
    return (
        <div className="video">
            <div className="videoTop">
                <img src="https://i.ytimg.com/vi/Nbdy-y3pjM8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPGrvNHB1ht3HCc4Cq00i1C_yFJQ" alt="" />
                <span>05:43</span>
            </div>
            <div className="videoTitle">
                Create app in 5 minutes | React Native Simplified
            </div>
            <div className="videoDetails">
                <span>
                    <AiFillEye/> 5m views •
                </span>
                <span>5 days ago</span>
            </div>
            <div className="videoChannel">
                <img src="https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <div>Ranibow Hat Jr</div>
            </div>
        </div>
    )
}

export default Video
