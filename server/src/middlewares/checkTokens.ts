import { NextFunction, Request, Response } from 'express';
import jwtService from '../services/jwt.service';
import userService from '../services/user.service';
import dotenvs from '../config/dotenv';

const { JWT_REFRESH_EXPIRES_IN } = dotenvs;

const checkTokensMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const accessToken = req?.headers?.authorization?.split(
		'Bearer '
	)[1] as string;

	const refreshToken = req.cookies.refreshToken;

	const isVaildAccessToken = jwtService.verifyToken(accessToken);
	const isVaildRefreshToken = jwtService.verifyToken(refreshToken);

	if (!isVaildAccessToken && !isVaildRefreshToken) {
		throw Error('API 사용 권한이 없습니다');
	}

	if (!isVaildAccessToken && isVaildRefreshToken) {
		const user = await userService.getUserByRefreshToken(refreshToken);

		const newAccessToken = jwtService.getAccessToken({
			id: user.id,
			name: user.name,
		});
		res.status(200).send({
			accessToken: newAccessToken,
			message: '로그인 기간이 만료되어 새로 로그인 되었습니다.',
		});
		next();
	}

	if (isVaildAccessToken && !isVaildRefreshToken) {
		const newRefreshToken = jwtService.getRefreshToken();

		await userService.saveRefreshToken(newRefreshToken, isVaildAccessToken.id);

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			expires: new Date(Date.now() + +JWT_REFRESH_EXPIRES_IN * 1000),
		});
		next();
	}

	if (isVaildAccessToken && isVaildRefreshToken) {
		next();
	}
};

export default checkTokensMiddleware;
