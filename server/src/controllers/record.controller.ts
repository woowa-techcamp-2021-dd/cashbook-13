import { addRecordService, getRecordService } from '../services/record.service';
import { Request, Response } from 'express';

export const getRecord = async (req: Request, res: Response) => {
	console.log('\n ####### getRecord #######');
	console.log('req.session : ', req.session);
	console.log('req.passport.user : ', req.user);

	const date = String(req.query.date);
	const record = await getRecordService(1, date);
	res.status(200).json({ record });
};

export const addRecord = async (req: Request, res: Response) => {
	const { user_id, category_id, payment_id, contents, amount, io, date } =
		req.body;
	const record = await addRecordService(
		user_id,
		category_id,
		payment_id,
		contents,
		amount,
		io,
		date
	);
	res.status(200).json({
		category_id: record.category_id,
		payment_id: record.payment_id,
		contents: record.contents,
		amount: record.amount,
		io: record['I/O'],
		date: record.date,
		createAt: record.createdAt,
		updateAt: record.updatedAt,
		user_id: record.user_id,
		id: record.id,
	});
};