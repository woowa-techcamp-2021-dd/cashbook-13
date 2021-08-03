import User from '../models/user.model';

const createUser = (name: string, githubID: string) =>
	new Promise((resolve, reject) => {
		User.create({
			name,
			githubID,
		});
	});

export const registerUser = async (name: string) => {
	const result: [User, boolean] = await User.findOrCreate({
		where: { name },
		defaults: { name },
		attributes: ['id'],
	});
	return result;
};
