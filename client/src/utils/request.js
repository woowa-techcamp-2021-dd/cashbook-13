import axios from 'axios';
const JWT_EXPIRY_TIME = 600000; // 60분
let TIMER;

axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.withCredentials = true;

export const requestSignin = (name) => {
	axios
		.post('/auth//signin', { name })
		.then(onLoginSuccess)
		.then()
		.catch((error) => {
			console.log(error.status);
		});
};

export const requestSignup = (name) =>
	new Promise((resolve, reject) => {
		axios
			.post('/auth/signup', { name })
			.then(onLoginSuccess)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error.response.data);
			});
	});

const _requestSilentRefresh = () => {
	axios
		.post('/auth//silent-refresh', {})
		.then(onLoginSuccess)
		.catch((error) => {
			console.log('error : ', error);
		});
};

export const onLoginSuccess = (response) => {
	const { accessToken } = response.data;
	axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

	TIMER = setTimeout(_requestSilentRefresh, JWT_EXPIRY_TIME - 60000);
	return true;
};

const singOut = () => {
	clearTimeout(TIMER);
};
