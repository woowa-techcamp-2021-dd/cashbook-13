import controlModal from './controlModal';

export default async function submitModal() {
	const $modal = document.querySelector('.modal');
	if ($modal !== null) {
		const cls = $modal.classList[$modal.classList.length - 1];

		if (cls === 'modal-category') {
			const category = await fetch(
				'http://localhost:4000/api/category/create',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: document.querySelector('.modal-input').value,
						color: '#000000',
					}),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					return data;
				});

			await fetch('http://localhost:4000/api/user/category/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user_id: 1,
					category_id: category.category.id,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
		} else {
			// 결제수단
		}
		controlModal(false, cls);
	}
}
