import axios from 'axios';

const APP_URL = 'https://nicawiki.herokuapp.com/api/';

export const apiRoot = axios.create({
	baseURL: APP_URL,
});
