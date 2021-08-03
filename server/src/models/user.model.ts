import { Sequelize, DataType, Model } from 'sequelize-typescript';
import { sequelize } from '.';

export interface UserAttributes {
	name: string;
	githubID?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class User extends Model<UserAttributes> {
	public readonly id!: number;
	public githubID?: string;
	public name!: string;

	public createdAt!: Date;
	public updatedAt!: Date;
}

User.init(
	{
		githubID: {
			type: DataType.STRING(45),
			allowNull: true,
		},
		name: {
			type: DataType.STRING(45),
			allowNull: false,
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
