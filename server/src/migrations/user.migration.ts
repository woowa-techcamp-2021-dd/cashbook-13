import User from '../models/user.model';

export const registerUser = async (name: string) => {
	const result: [User, boolean] = await User.findOrCreate({
		where: { name },
		defaults: { name },
		attributes: ['id'],
	});
	return result;
};

export const findUser = async (name: string) => {
	const user = await User.findOne({
		where: { name },
		attributes: ['id', 'name'],
	});
	return user;
};

export const insertRefreshTokenToUser = async (token: string, id: number) => {
	const result = await User.update(
		{ refresh_token: token },
		{
			where: {
				id,
			},
		}
	);
	return result;
};
