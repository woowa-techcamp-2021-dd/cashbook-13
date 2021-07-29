import { Request, Response, NextFunction } from 'express';
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		next();
	}
	return res.status(301).redirect('/auth/fail');
};
