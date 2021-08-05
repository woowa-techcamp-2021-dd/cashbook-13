import { Request, Response, NextFunction } from 'express';
import userService from '../services/user.service';
import jwtService from '../services/jwt.service';
import dotenv from '../config/dotenv';
const { JWT_ACCESS_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN } = dotenv;
const authController = {
	signUp: async (req: Request, res: Response, next: NextFunction) => {
		const { name } = req.body;
		await userService.register(name);
		res.status(200).json({ message: '회원가입에 성공했습니다!' });
	},
	signIn: async (req: Request, res: Response, next: NextFunction) => {
		const { name } = req.body;
		const user = await userService.signin(name);

		const refreshToken = jwtService.getRefreshToken({
			id: user.id,
			name: user.name,
		});

		const result = await userService.saveRefreshToken(refreshToken, user.id);

		const accessToken = jwtService.getAccessToken({
			id: user.id,
			name: user.name,
		});
		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			expires: new Date(Date.now() + +JWT_REFRESH_EXPIRES_IN * 1000),
		});
		res.status(200).json({
			message: '로그인에 성공했습니다!',
			accessToken,
			JWT_ACCESS_EXPIRES_IN,
		});
	},
};

export default authController;
