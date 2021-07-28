import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
	HOST: process.env.DB_HOST || 'localhost',
	USER: process.env.DB_USER || 'root',
	DB: process.env.DB || 'typescript_test',
	PASSWORD: process.env.DB_PASSWORD,
	PORT: process.env.DB_PORT || 3306,
	dialect: 'mysql',
};

export const pool = {
	max: 5,
	min: 0,
	acquire: 30000, // 오류가 발생하기 전 해당 풀에 연결을 시도하는 최대 시간
	idle: 10000, // 연결이 해제되기 전 유휴 상태일 수 있는 최대 시간
};
