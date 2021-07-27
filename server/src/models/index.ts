import { Sequelize } from 'sequelize';
import { dbConfig, pool } from '../config/db.config';

export const sequelize = new Sequelize(
	dbConfig.DB,
	dbConfig.USER,
	dbConfig.PASSWORD,
	{
		host: dbConfig.HOST,
		dialect: 'mysql',
		pool,
	}
);
