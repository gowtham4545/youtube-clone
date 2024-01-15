import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyB7mw8WOAHNF1-KcJyBvfx2b0LrQfkzNxU",
    }
});

export default request;