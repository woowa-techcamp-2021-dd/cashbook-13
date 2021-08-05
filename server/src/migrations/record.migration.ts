import { format } from 'sequelize/types/lib/utils';
import Record, { IO } from '../models/record.model';
import { Op } from 'sequelize';

export const createRecord = (
	user_id: number,
	contents: string,
	amount: number,
	category_id: number,
	payment_id: number,
	date: Date,
	IO: IO
) =>
	new Promise((resolve, reject) => {
		Record.create({
			user_id,
			contents,
			amount,
			category_id,
			payment_id,
			date,
			'I/O': IO,
		});
	});

export const getRecord = async (user_id: number, date: string) => {
	const startDate = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}`)
		.toISOString()
		.replace('T', ' ')
		.substr(0, 19);

	const endDate = new Date(Number(date.slice(0, 4)), Number(date.slice(4, 6)))
		.toISOString()
		.replace('T', ' ')
		.substr(0, 19)
		.replace('15:00:00', '23:59:59');

	console.log(startDate, endDate);
	return await Record.findAll({
		where: {
			user_id,
			date: { [Op.between]: [startDate, endDate] },
		},
		order: [['date', 'DESC']],
	});
};

export const addRecord = async (
	user_id: number,
	category_id: number,
	payment_id: number,
	contents: string,
	amount: number,
	io: IO,
	date: Date
) => {
	console.log(date);
	await Record.create({
		user_id,
		'category_id': 1,
		'payment_id': 1,
		contents,
		amount,
		'I/O': io,
		date,
	});
};
