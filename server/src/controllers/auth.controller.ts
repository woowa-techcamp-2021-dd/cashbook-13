import { Request, Response } from 'express';


export const loginGithub = (req: Request, res: Response) => {
	passport.authenticate('github');
};
