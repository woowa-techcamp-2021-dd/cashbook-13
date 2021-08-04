import ServiceError from '../errors/service-error';

import { Request, Response } from 'express';

interface responseBody {
	status: number;
	message: string;
}

const errorMiddleware = (
	error: Error | Error[],
	req: Request,
	res: Response
) => {
	let status = 500;
	let message = '서버 오류';

	if (error instanceof ServiceError) {
		status = error.status;
		message = error.message;
	}

	const responseBody: responseBody = { status, message };
	res.status(status).json(responseBody);
};

export default errorMiddleware;
