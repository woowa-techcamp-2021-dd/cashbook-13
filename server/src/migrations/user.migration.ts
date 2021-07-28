import User from '../models/user.model';

const createUser = (name: string, email: string) =>
	new Promise((resolve, reject) => {
		User.create({
			name,
			email,
		});
	});

createUser('테스트맨', 'test@naver.com');
