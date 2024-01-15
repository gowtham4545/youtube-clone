import { createSlice } from "@reduxjs/toolkit"
import { getPopularVideos } from '../Actions/videoAction';

const initialState = {
    videos: [],
    nextPageToken: null,
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: lifeCycle => {
        lifeCycle.addCase(getPopularVideos.fulfilled, (state, { payload }) => {
            state.videos = payload.videos;
            state.nextPageToken = payload.nextPageToken;
        })
    }
});

export default videoSlice.reducer;