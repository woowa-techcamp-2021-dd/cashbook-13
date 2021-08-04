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
	const result = await User.findOne({
		where: { name },
	});

	return result;
};
