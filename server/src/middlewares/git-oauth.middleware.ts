import passport from 'passport';
import { Strategy } from 'passport-github';
// import User, { UserAttributes } from '../models/user.model';
// import github = Strategy;
// import * as oauth2 from 'passport-oauth2';

const githubConfig = {
	clientID: process.env.GITHUB_CLIENT_ID || '',
	clientSecret: process.env.GITHUB_CLIENT_SECRETS || '',
	callbackURL: process.env.GITHUB_CLIENT_CALLBACK_URL || '',
};

// const githubLoginVerify = async (
// 	accessToken: string,
// 	refreshToken: string,
// 	profile: github.Profile,
// 	callback: oauth2.VerifyCallback
// ) => {
// 	try {
// 		const {
// 			_json: { id, login, node_id } :,
// 		} = profile;
// 		const userInfo = { id, login, node_id };
// 		return callback(null, userInfo);
// 	} catch (error) {
// 		return callback(null, false, { msg: '에뤄에뤄' });
// 	}
// };

passport.serializeUser((user, cb) => {
	console.log('serialize : ', user);
	cb(null, user);
});

passport.deserializeUser((user: Express.User, cb) => {
	console.log('deserialize : ', user);
	cb(null, user);
});

//declare modeul을 해주라
const gitPassport = () => {
	passport.use(
		'github',
		new Strategy(
			githubConfig,
			(accessToken, refreshToken, profile: any, callback) => {
				try {
					const { _json } = profile;
					const { login, id, node_id } = _json;
					return callback(null, { login, id, node_id });
				} catch (error) {
					return callback(null, {}, { msg: '에뤄에뤄' });
				}
			}
		)
	);
};

export default gitPassport;

// User.findOrCreate({
// 	where: { githubID: profile.id },
// 	defaults: { name: profile.name?.givenName || '', githubID: profile.id },
// })
// 	.then((row) => {
// 		return callback(null, row[0]);
// 	})
// 	.catch((err) => {
// 		return callback(err, false);
// 	});
// // type VerifyCallback = (err?: Error | null, user?: Express.User, info?: object) => void;

// // db처리 findOrCreate
// // let user = await User.
// // return callback(null, profile);
