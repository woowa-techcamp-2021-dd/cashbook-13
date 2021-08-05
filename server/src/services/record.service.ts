import { addRecord, getRecord } from '../migrations/record.migration';
import { IO } from '../models/record.model';

export const getRecordService = async (userID: number, date: string) => {
	const record = await getRecord(userID, String(date));
	return record;
};

export const addRecordService = async (
	user_id: number,
	category_id: number,
	payment_id: number,
	contents: string,
	amount: number,
	IO: IO,
	date: Date
) => {
	await addRecord(user_id, category_id, payment_id, contents, amount, IO, date);
};
