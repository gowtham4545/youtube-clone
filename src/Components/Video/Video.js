import React, { useEffect, useState } from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';

const Video = ({ video, key }) => {
    const { id, snippet: {
        channelId,
        channelTitle,
        title,
        publishedAt,
        thumbnails: {
            medium,
        },
    } } = video;

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)

    useEffect(() => {
        const getVideoDetails = async () => {
            const { data: { items } } = await request("/videos", {
                params: {
                    part: "contentDetails,statistics",
                    id: id,
                },
            })
            console.log(items);
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        getVideoDetails();
    }, [id]);

    const mSec = moment.duration(duration).asSeconds();
    const _duration = moment.utc(mSec * 1000).format("mm:ss");

    return (
        <div className="video" key={key}>
            <div className="videoTop">
                <img src={medium.url} alt="" />
                <span>{_duration}</span>
            </div>
            <div className="videoTitle">
                {title}
            </div>
            <div className="videoDetails">
                <span>
                    <AiFillEye /> {numeral(views).format("0.a")} views • &nbsp;
                </span>
                <span>{moment(publishedAt).fromNow()}</span>
            </div>
            <div className="videoChannel">
                <img src="https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <div>{channelTitle}</div>
            </div>
        </div>
    )
}

export default Video
