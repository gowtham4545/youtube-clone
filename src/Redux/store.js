import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authReducer'
import videoReducer from './Reducers/videoReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        video: videoReducer,
    }
});