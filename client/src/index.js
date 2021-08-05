import App from './app';
import './style.scss';

import {
	createElement,
	excuteDidMountCallbackQueue,
} from './core/createElement';
import { requestSilentRefresh } from './utils/request';

// const $test = document.getElementById('test');

// $test.addEventListener('click', async () => {
// 	const res = await fetch('http://localhost:4000/api/record?userID=1', {
// 		credentials: 'include',
// 	}).then((res) => {
// 		if (!res.ok) return;
// 		return res.json();
// 	});
// });

const $app = document.getElementById('app');
$app.append(createElement(App));
excuteDidMountCallbackQueue();

window.addEventListener('DOMContentLoaded', requestSilentRefresh);
