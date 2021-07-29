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
	// function (req, res, next) {
	// 	console.log('\n ####### login/github/callback #######');
	// 	req.login(user, function (err) {
	// 		if (err) {
	// 			return next(err);
	// 		}
	// 		res.redirect('/');
	// 	});
	// }
);

export default authRouter;
