import jwt from 'jsonwebtoken';
import { decode } from 'punycode';
import dotenv from '../config/dotenv';

interface JWTSign {
	id: number;
	name: string;
}
const {
	JWT_ACCESS_EXPIRES_IN,
	JWT_REFRESH_EXPIRES_IN,
	JWT_ISSUER,
	JWT_SUBJECT,
	JWT_SECRET,
} = dotenv;

const getAccessToken = (payload: JWTSign) => {
	const options: jwt.SignOptions = {
		expiresIn: JWT_ACCESS_EXPIRES_IN,
		subject: JWT_SUBJECT,
		issuer: JWT_ISSUER,
	};

	return jwt.sign({ user: payload }, JWT_SECRET, options);
};

const getRefreshToken = () => {
	const options = {
		expiresIn: JWT_REFRESH_EXPIRES_IN,
		issuer: JWT_ISSUER,
	};

	return jwt.sign({}, JWT_SECRET, options);
};

const verifyToken = (token: string) => {
	try {
		return jwt.verify(token, JWT_SECRET) as JWTSign;
	} catch (e) {
		return null;
	}
};

const jwtService = {
	getAccessToken,
	getRefreshToken,
	verifyToken,
};

export default jwtService;
