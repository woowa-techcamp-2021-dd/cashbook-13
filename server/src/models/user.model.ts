import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

export interface UserAttributes {
	name: string;
	githubID: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class User extends Model<UserAttributes> {
	public readonly id!: number;
	public githubID!: string;
	public name!: string;

	public createdAt!: Date;
	public updatedAt!: Date;
}

User.init(
	{
		githubID: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(45),
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
		tableName: 'users',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
