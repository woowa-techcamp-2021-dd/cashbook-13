import { Request, Response, NextFunction } from 'express';
import {
	registerUserService,
	signinUserService,
} from '../services/auth.service';

const authController = {
	signUp: async (req: Request, res: Response, next: NextFunction) => {
		const { name } = req.body;
		await registerUserService(name);
		res.status(200).json({ message: '회원가입에 성공했습니다!' });
	},
	signIn: async (req: Request, res: Response, next: NextFunction) => {
		const { name } = req.body;
		const user = await signinUserService(name);

		console.log(11);
		// const { accessToken, refreshToken } = {};

		// res.setHeader();
		// res.setHeader();
		res.status(200).json({ message: '로그인에 성공했습니다!' });
	},
};

export default authController;
