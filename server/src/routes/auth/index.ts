import { Router } from 'express';
import passport from 'passport';
import authController from '../../controllers/auth.controller';
import gitPassport from '../../middlewares/git-oauth.middleware';
import wrapAsync from '../../middlewares/wrap-async';

const authRouter = Router();
gitPassport();

authRouter.post('/signup', wrapAsync(authController.signUp));
authRouter.post('/signin', wrapAsync(authController.signIn));
authRouter.get('/signin/github', passport.authenticate('github'));

authRouter.get(
	'/signin/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/fail',
		successRedirect: 'http://localhost:8080',
	})
);

export default authRouter;
