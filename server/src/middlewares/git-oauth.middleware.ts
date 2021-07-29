import passport from 'passport';
import { Strategy } from 'passport-github';

const githubConfig = {
	clientID: process.env.GITHUB_CLIENT_ID || '',
	clientSecret: process.env.GITHUB_CLIENT_SECRETS || '',
	callbackURL: process.env.GITHUB_CLIENT_CALLBACK_URL || '',
};

interface User {
	login: string;
	id: number;
	node_id: string;
}

const githubPassport = () => {
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user: any, cb) => {
		cb(null, user);
	});

	passport.use(
		'github',
		new Strategy(
			githubConfig,
			(accessToken, refreshToken, profile: any, callback) => {
				try {
					const { _json } = profile;
					const { login, id, node_id }: User = _json;
					return callback(null, { login, id, node_id });
				} catch (error) {
					return callback(null, {}, { msg: '에뤄에뤄' });
				}
			}
		)
	);
};

export default githubPassport;
