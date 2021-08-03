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
		successRedirect: 'http://localhost:8080',
	})
);

export default authRouter;
