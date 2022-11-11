import axios from 'axios';

const APP_URL = 'https://nicawiki.herokuapp.com/api/';

export const apiRoot = axios.create({
	baseURL: APP_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Credentials': 'true',
	},
});
