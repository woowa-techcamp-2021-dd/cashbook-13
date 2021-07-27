import { Users_test } from '../../models/users';

const createUser = (name: string, email: string) =>
	new Promise((resolve, reject) => {
		Users_test.create({
			name,
			email,
		});
	});

createUser('테스트맨', 'test@naver.com');
