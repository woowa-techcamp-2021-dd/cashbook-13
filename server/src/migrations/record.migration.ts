import Record from '../models/record.model';

export const createRecord = (
	user_id: number,
	contents: string,
	amount: number,
	category_id: number,
	payment_id: number,
	date: Date
) =>
	new Promise((resolve, reject) => {
		Record.create({
			user_id,
			contents,
			amount,
			category_id,
			payment_id,
			date,
		});
	});

export const getRecord = async (user_id: number) =>
	await Record.findAll({
		where: {
			user_id,
		},
	});
