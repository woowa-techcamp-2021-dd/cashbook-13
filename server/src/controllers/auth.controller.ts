import { Request, Response, NextFunction } from 'express';
import userService from '../services/user.service';
import jwtService from '../services/jwt.service';
import dotenvs from '../config/dotenv';
import HTTPError from '../errors/service-error';

const { JWT_ACCESS_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN } = dotenvs;

const signup = async (req: Request, res: Response, next: NextFunction) => {
	const { name } = req.body;
	await userService.register(name);
	res.status(200).json({ message: '회원가입에 성공했습니다!' });
};

const signin = async (req: Request, res: Response, next: NextFunction) => {
	const { name } = req.body;
	const user = await userService.signin(name);

	const refreshToken = jwtService.getRefreshToken();

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
};

const signout = async (req: Request, res: Response) => {
	const accessToken = req?.headers?.authorization?.split(
		'Bearer '
	)[1] as string;
	const decoded = jwtService.verifyToken(accessToken);

	if (!decoded) {
		throw new HTTPError(400, '유효하지 않은 토큰입니다');
	}

	const { id } = decoded;

	await userService.signout(id);

	res.send(200).json({
		message: '로그아웃 되었습니다.',
	});
};

const silentRefresh = async (req: Request, res: Response) => {
	const { refreshToken } = req.cookies;
	const user = await userService.getUserByRefreshToken(refreshToken);

	const newAccessToken = jwtService.getAccessToken({
		id: user.id,
		name: user.name,
	});

	res.cookie('refreshToken', refreshToken, {
		httpOnly: true,
		expires: new Date(Date.now() + +JWT_REFRESH_EXPIRES_IN * 1000),
	});

	res.status(200).send({
		accessToken: newAccessToken,
		message: '로그인 기간이 만료되어 새로 로그인 되었습니다.',
		JWT_ACCESS_EXPIRES_IN,
	});
};

const authController = {
	signup,
	signin,
	signout,
	silentRefresh,
};

export default authController;
