export default async function saveRecord(
	date,
	category_id,
	contents,
	payment_id,
	IO,
	amount
) {
	if (
		date !== '' &&
		category_id !== '' &&
		contents !== '' &&
		payment_id !== '' &&
		amount !== 0
	) {
		const record = {
			user_id: 1,
			category_id,
			payment_id,
			contents,
			amount,
			io: IO ? 'in' : 'out',
			date: new Date(
				`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`
			)
				.toISOString()
				.replace('T', ' ')
				.substr(0, 19),
		};
		await fetch('http://localhost:4000/api/record/user/records', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(record),
		});
	}
}

// TODO: userid 어떻게 받지? 컨트롤러에서?, db create, 수정은 어떻게?
