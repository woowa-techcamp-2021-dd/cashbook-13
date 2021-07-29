import { Router } from 'express';
import passport from 'passport';
import gitPassport from '../../middlewares/git-oauth.middleware';

const authRouter = Router();

gitPassport();

authRouter.get('/login/github', passport.authenticate('github'));

authRouter.get(
	'/login/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/fail',
		successRedirect:
			'http://ec2-3-35-132-151.ap-northeast-2.compute.amazonaws.com/',
	})
);

export default authRouter;
