import HTTPError from '../errors/service-error';

import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
	error: Error | Error[],
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let status = 500;
	let message = '서버 오류';
	if (error instanceof HTTPError) {
		status = error.status;
		message = error.message;
	}

	res.status(status).json({ message });
};

export default errorMiddleware;
