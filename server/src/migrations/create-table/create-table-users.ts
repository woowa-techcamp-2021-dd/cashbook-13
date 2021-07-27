import { Users_test } from '../../models/users';

console.log('======Create User Table======');

const create_table_users = async () => {
	await Users_test.sync({ force: true })
		.then(() => {
			console.log('✅Success Create User Table');
		})
		.catch((err) => {
			console.log('❗️Error in Create User Table : ', err);
		});
};

create_table_users();
