import User from '../models/user.model';

const createUser = (name: string, githubID: string) =>
	new Promise((resolve, reject) => {
		User.create({
			name,
			githubID,
		});
	});

createUser('테스트맨', 'test@naver.com');
