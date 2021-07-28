import Payment from '../models/payment.model';

const createPayment = (method: string) =>
	new Promise((resolve, reject) => {
		Payment.create({ method });
	});
