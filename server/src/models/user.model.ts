import { Sequelize, DataType, Model } from 'sequelize-typescript';
import { sequelize } from '.';

export interface UserAttributes {
	id?: number;
	name: string;
	githubID?: string;
	refresh_token?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class User extends Model<UserAttributes> {
	public readonly id!: number;
	public name!: string;
	public githubID?: string;
	public refresh_token?: string;

	public createdAt!: Date;
	public updatedAt!: Date;
}

User.init(
	{
		name: {
			type: DataType.STRING(45),
			allowNull: false,
		},
		githubID: {
			type: DataType.STRING(45),
			allowNull: true,
		},
		refresh_token: {
			type: DataType.STRING(200),
			allowNull: true,
		},
		createdAt: {
			type: 'TIMESTAMP',
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		updatedAt: {
			type: 'TIMESTAMP',
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
	},
	{
		modelName: 'user',
		tableName: 'user',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
