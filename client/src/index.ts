import './style.scss';

const $test = document.getElementById('test');

$test?.addEventListener('click', async () => {
	// const res = await fetch('http://localhost:4000/api/record?userID=1').then(
	// 	(res) => {
	// 		if (!res.ok) return;
	// 		return res.json();
	// 	}
	// );
	// console.log(res);
	const res = await fetch('http://localhost:4000/api/record?userID=1', {
		credentials: 'include',
	});
});
