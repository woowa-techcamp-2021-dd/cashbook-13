import { Request, Response } from 'express';
import { registerUserService } from '../services/auth.service';

const authController = {
	signUp: async (req: Request, res: Response) => {
		const { name } = req.body;
		console.log('name : ', name);
		try {
			const user = await registerUserService(name);
			res.status(200).json({ message: '성공' });
		} catch (err) {
			res.status(err.status).json({ message: err.message });
		}
	},
	signIn: async (req: Request, res: Response) => {
		const { name } = req.body;
		console.log(name);
	},
};

export default authController;
