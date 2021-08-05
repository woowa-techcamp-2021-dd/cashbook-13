import axios from 'axios';

let TIMER;

axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.withCredentials = true;

export const requestSignin = (name) =>
	new Promise((resolve, reject) => {
		axios
			.post('/auth//signin', { name })
			.then(onLoginSuccess)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error.response);
			});
	});

export const requestSignup = (name) =>
	new Promise((resolve, reject) => {
		axios
			.post('/auth/signup', { name })
			.then((res) => {
				clearTimeout(TIMER);
				resolve(res);
			})
			.catch((error) => {
				reject(error.response);
			});
	});

export const requestSignout = () =>
	new Promise((resolve, reject) => {
		axios
			.delete('/auth/singout', {})
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error.response);
			});
	});

export const requestSilentRefresh = () => {
	axios
		.put('/auth/silent-refresh', {})
		.then(onLoginSuccess)
		.catch((error) => {
			console.log('error : ', error);
		});
};

export const onLoginSuccess = (response) => {
	const { accessToken, JWT_ACCESS_EXPIRES_IN } = response.data;
	axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
	TIMER = setTimeout(requestSilentRefresh, JWT_ACCESS_EXPIRES_IN * 1000);
	return response;
};
