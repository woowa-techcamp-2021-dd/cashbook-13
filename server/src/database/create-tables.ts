import User from '../models/user.model';
import Category from '../models/category.model';
import Payment from '../models/payment.model';
import Record from '../models/record.model';
import UserCategory from '../models/user-category.model';
import UserPayment from '../models/user-payment.model';

const MODELS = [User, Category, Payment, Record, UserCategory, UserPayment];

async function createTables() {
	console.log('======Create Table======');

	await Promise.all(
		MODELS.map(async (model) => {
			await model
				.sync({ force: true })
				.then(() => {
					console.log(`✅Success Create ${model.tableName} Table`);
				})
				.catch((err) => {
					console.log(`❗️Error in Create ${model.tableName} Table `, err);
				});
		})
	).then(() => {
		console.log('======Complate create Table!======');
	});
}

createTables();
