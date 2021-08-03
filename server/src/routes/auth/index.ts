import { Router } from 'express';
import passport from 'passport';
import authController from '../../controllers/auth.controller';
import gitPassport from '../../middlewares/git-oauth.middleware';

const authRouter = Router();
gitPassport();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.get('/signin/github', passport.authenticate('github'));

authRouter.get(
	'/signin/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/fail',
		successRedirect: 'http://localhost:8080',
	})
);

export default authRouter;
