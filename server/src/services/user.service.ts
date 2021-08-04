import {
	registerUser,
	findUser,
	insertRefreshTokenToUser,
} from '../migrations/user.migration';
import ServiceError from '../errors/service-error';

const register = async (name: string) => {
	const [user, created] = await registerUser(name);
	if (!created) {
		throw new ServiceError(409, '사용중인 유저 네임입니다.');
	}

	return user;
};

const signin = async (name: string) => {
	const user = await findUser(name);

	if (!user) {
		throw new ServiceError(400, '해당 유저가 존재하지 않습니다.');
	}
	return user;
};

const saveRefreshToken = async (token: string) => {
	const res = await insertRefreshTokenToUser(token);

	if (false) {
		throw new ServiceError(400, '리프레시 토큰 저장 실패');
	}
};

const userService = {
	register,
	signin,
	saveRefreshToken,
};

export default userService;
