import {
	registerUser,
	findUser,
	insertRefreshTokenToUser,
	findUserByRefreshToken,
	signoutUser,
} from '../migrations/user.migration';
import HTTPError from '../errors/service-error';

const register = async (name: string) => {
	const [user, created] = await registerUser(name);
	if (!created) {
		throw new HTTPError(409, '사용중인 유저 네임입니다.');
	}

	return user;
};

const signin = async (name: string) => {
	const user = await findUser(name);

	if (!user) {
		throw new HTTPError(400, '해당 유저가 존재하지 않습니다.');
	}
	return user;
};

const signout = async (id: number) => {
	const result = await signoutUser(id);

	if (!result) {
		throw new HTTPError(400, 'refreshToken 제거 실패');
	}
};

const saveRefreshToken = async (token: string, id: number) => {
	const res = await insertRefreshTokenToUser(token, id);

	if (!res[0]) {
		throw new HTTPError(400, '리프레시 토큰 저장 실패');
	}
};

const getUserByRefreshToken = async (token: string) => {
	const user = await findUserByRefreshToken(token);

	if (!user) {
		throw new HTTPError(400, '유효하지 않은 토큰');
	}
	return user;
};

const userService = {
	register,
	signin,
	signout,
	saveRefreshToken,
	getUserByRefreshToken,
};

export default userService;
