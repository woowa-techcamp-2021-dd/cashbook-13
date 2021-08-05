export default async function getRecord(obj) {
	return await fetch(
		`http://localhost:4000/api/record/user/records?date=${
			obj.date.year.toString() + obj.date.month.toString().padStart(2, '0')
		}01`
	)
		.then((res) => res.json())
		.then((data) => {
			return { date: obj.date, records: data.record };
		});
}
