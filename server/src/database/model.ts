import dbConfig from '../config/db.config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire, // 오류가 발생하기 전 해당 풀에 연결을 시도하는 최대 시간
		idle: dbConfig.pool.idle, // 연결이 해제되기 전 유휴 상태일 수 있는 최대 시간
	},
});

const db = {
	Sequelize,
	sequelize,
};
