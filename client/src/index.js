import './style.scss';
import App from './app';
import { createElement } from './core/createElement';

const $test = document.getElementById('test');

$test.addEventListener('click', async () => {
	const res = await fetch('http://localhost:4000/api/record?userID=1', {
		credentials: 'include',
	}).then((res) => {
		if (!res.ok) return;
		return res.json();
	});
});

const $app = document.getElementById('app');
$app.append(createElement(App));
