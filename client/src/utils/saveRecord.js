export default function saveRecord() {
	const record = {
		// user_id: 1,
		// category_id: 1,
		// payment_id: 1,
		category: document.querySelector('.inputbar-category > div > div')
			.innerText,
		payment: document.querySelector('.inputbar-payment > div > div').innerText,
		contents: document.querySelector('.inputbar-content').value,
		amount: document.querySelector('.inputbar-amount').value,
		// 'I/O':
		date: document.querySelector('.inputbar-date').value,
	};
	console.log(record);
}

// TODO: id들 가져오기, db create, 수정은 어떻게?
