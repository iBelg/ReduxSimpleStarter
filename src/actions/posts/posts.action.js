import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`;
const API_KEY = '?key=gverudemy20180426'; 

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}