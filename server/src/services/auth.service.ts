import { registerUser, findUser } from '../migrations/user.migration';
import ServiceError from '../errors/service-error';

export const registerUserService = async (name: string) => {
	const [user, created] = await registerUser(name);
	if (!created) {
		throw new ServiceError(409, '사용중인 유저 네임입니다.');
	}

	return user;
};

export const signinUserService = async (name: string) => {
	const user = await findUser(name);

	if (!user) {
		throw new ServiceError(400, '해당 유저가 존재하지 않습니다.');
	}
};
