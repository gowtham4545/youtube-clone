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
    const [channelIcon, setChannelIcon] = useState(null)

    useEffect(() => {
        try {
            const getVideoDetails = async () => {
                const { data: { items } } = await request("/videos", {
                    params: {
                        part: "contentDetails,statistics",
                        id: id,
                    },
                })
                setDuration(items[0].contentDetails.duration)
                setViews(items[0].statistics.viewCount)
            }
            getVideoDetails();
        } catch (error) { }
    }, [id]);

    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default);
        }
        getChannelIcon()
    }, [channelId])

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
                <img src={channelIcon ? channelIcon.url : ''} alt="" />
                <div>{channelTitle}</div>
            </div>
        </div>
    )
}

export default Video
