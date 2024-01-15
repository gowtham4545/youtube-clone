import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api"

const mostPopularVideos = async () => {
    try {
        const { data } = await request('/videos', {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "IN",
                maxResults: 20,
                pageToken: '',
            },
        })
        const payload = {
            videos: data.items,
            nextPageToken: data.nextPageToken,
        }
        console.log(payload, data);
        return payload;
    } catch (error) {
        if (error.response && error.response.data.message) {
            console.log(error.response.data.message);
            return (error.response.data.message)
        } else {
            console.log(error.message);
            return (error.message)
        }
    }
}

export const getPopularVideos = createAsyncThunk('video/mostPopular', mostPopularVideos);