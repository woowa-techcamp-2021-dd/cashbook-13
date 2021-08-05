import axios from 'axios';

export default async function getRecord(obj) {
	return await fetch(
		`http://3.35.132.151:4000/api/record/user/records?date=${
			obj.date.year.toString() + obj.date.month.toString().padStart(2, '0')
		}01`
	)
		.then((res) => res.json())
		.then((data) => {
			return { date: obj.date, records: data.record };
		});
	// return new Promise((resolve, reject) => {
	// 	const year = new Date().getFullYear();
	// 	const month = new Date().getMonth();
	// 	console.log(333, axios.defaults.headers.common.Authorization);

	// 	axios
	// 		.get(
	// 			`http://3.35.132.151:4000/api/record/user/records?date=${
	// 				year.toString() + month.toString().padStart(2, '0')
	// 			}01`
	// 		)
	// 		.then((res) => {
	// 			console.log(res);
	// 			resolve(res);
	// 		})
	// 		.catch((error) => {
	// 			reject(error.response);
	// 		});
	// });
}
