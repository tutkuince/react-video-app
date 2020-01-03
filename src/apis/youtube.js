import axios from 'axios';

const KEY = 'AIzaSyB7QjHWU5RQ_zr8hNyEd-L25TdpXMsHx0E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});