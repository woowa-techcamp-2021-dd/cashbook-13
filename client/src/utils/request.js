import axios from 'axios';

let TIMER;

axios.defaults.baseURL = 'http://3.35.132.151:4000/api';
axios.defaults.withCredentials = true;

export const requestSignin = (name) =>
	new Promise((resolve, reject) => {
		axios
			.post('/auth/signin', { name })
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

export const requestRecord = () =>
	new Promise((resolve, reject) => {
		const year = new Date().getFullYear();
		const month = new Date().getMonth();
		axios
			.get(
				`http://3.35.132.151:4000/api/record/user/records?date=${
					year.toString() + month.toString().padStart(2, '0')
				}01`
			)
			.then((res) => {
				resolve(res.data.record);
			})
			.catch((error) => {
				reject(error.response);
			});
	});

// initialize: async () => {
// 	const year = new Date().getFullYear();
// 	const month = new Date().getMonth();
// 	return await fetch(
// 		`http://3.35.132.151:4000/api/record/user/records?date=${
// 			year.toString() + month.toString().padStart(2, '0')
// 		}01`
// 	)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			return data.record;
// 		});
// },

export const onLoginSuccess = (response) => {
	const { accessToken, JWT_ACCESS_EXPIRES_IN } = response.data;
	axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
	TIMER = setTimeout(requestSilentRefresh, JWT_ACCESS_EXPIRES_IN * 1000);
	return response;
};
