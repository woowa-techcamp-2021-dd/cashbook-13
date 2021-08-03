import { registerUser } from '../migrations/user.migration';
import HTTPError from '../errors/http-error';

export const registerUserService = async (name: string) => {
	const [user, created] = await registerUser(name);

	if (!created) {
		throw new HTTPError(409, '이미 존재하는 아이디입니다.');
	}

	return user;
};
