import recordService from '../services/record.service';
import { Request, Response } from 'express';

export const getRecord = async (req: Request, res: Response) => {
	console.log('\n ####### getRecord #######');
	console.log('req.session : ', req.session);
	console.log('req.passport.user : ', req.user);

	const { userID } = req.query;
	const record = await recordService(Number(userID));
	res.status(200).json({ record });
};
