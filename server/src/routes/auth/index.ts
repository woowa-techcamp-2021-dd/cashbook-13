import { Router } from 'express';
import passport from 'passport';
import authController from '../../controllers/auth.controller';
import gitPassport from '../../middlewares/git-oauth.middleware';
import wrapAsync from '../../middlewares/wrap-async';

const authRouter = Router();
gitPassport();

authRouter.post('/signup', wrapAsync(authController.signup));
authRouter.post('/signin', wrapAsync(authController.signin));
authRouter.put('/silent-refresh', wrapAsync(authController.silentRefresh));
authRouter.delete('/signout', wrapAsync(authController.signout));

authRouter.get('/signin/github', passport.authenticate('github'));

authRouter.get(
	'/signin/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/fail',
		successRedirect:
			'http://ec2-3-35-132-151.ap-northeast-2.compute.amazonaws.com/',
	})
);

export default authRouter;
