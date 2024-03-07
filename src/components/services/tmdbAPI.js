import axios from 'axios';

const apiKey = '1880fd2d635c13d0b9188f99fcb24718';
const baseURL = 'https://api.themoviedb.org/3';

const tmdbAPI = axios.create({
    baseURL: baseURL,
    params: {
        api_key: apiKey,
    },
});

export default tmdbAPI;
