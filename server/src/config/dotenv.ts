const load = (key: string): string => {
	const value = process.env[key];
	if (value === undefined) {
		throw new Error(`환경변수 ${key}가 설정되지 않았습니다`);
	}

	return value;
};

const dotenv = {
	PORT: load('PORT'),
	DB_USER: load('DB_USER'),
	DB_HOST: load('DB_HOST'),
	DB_PORT: load('DB_PORT'),
	DB: load('DB'),
	DB_PASSWORD: load('DB_PASSWORD'),
	JWT_ACCESS_EXPIRES_IN: load('JWT_ACCESS_EXPIRES_IN'),
	JWT_REFRESH_EXPIRES_IN: load('JWT_REFRESH_EXPIRES_IN'),
	JWT_ISSUER: load('JWT_ISSUER'),
	JWT_SUBJECT: load('JWT_SUBJECT'),
	JWT_SECRET: load('JWT_SECRET'),
};

export default dotenv;
