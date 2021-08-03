import axios from 'axios';
const JWT_EXPIRY_TIME = 600000; // 60분
let TIMER;

axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.withCredentials = true;

export const requestSignIn = (name) => {
	axios
		.post('/auth//signin', { name })
		.then((response) => {
			const { accessToken } = response.data;
			axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
		})
		.catch((error) => {
			console.log(error.status);
		});
};

export const requestSignUp = (name) => {
	axios
		.post('/auth/signup', { name })
		.then(onLoginSuccess)
		.catch((error) => {
			console.log(error.response.data.message);
		});
};

const _requestSilentRefresh = () => {
	axios
		.post('/auth//silent-refresh', {})
		.then(onLoginSuccess)
		.catch((error) => {
			console.log('error : ', error);
		});
};

export const onLoginSuccess = (response) => {
	console.log('success');
	const { accessToken } = response.data;
	axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
	TIMER = setTimeout(_requestSilentRefresh, JWT_EXPIRY_TIME - 60000);
};

const singOut = () => {
	clearTimeout(TIMER);
};
