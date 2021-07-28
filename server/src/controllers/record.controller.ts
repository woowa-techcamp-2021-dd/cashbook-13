import recordService from '../services/record.service';
import { Request, Response } from 'express';

export const getRecord = async (req: Request, res: Response) => {
	const { userID } = req.query;
	const record = await recordService(Number(userID));
	console.log('controller : ', record);
	res.status(200).json({ record });
};
