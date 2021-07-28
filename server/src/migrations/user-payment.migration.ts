import UserPayment from '../models/user-payment.model';

const createUserPayment = (user_id: number, payment_id: number) =>
	new Promise((resolve, reject) => {
		UserPayment.create({
			user_id,
			payment_id,
		});
	});
