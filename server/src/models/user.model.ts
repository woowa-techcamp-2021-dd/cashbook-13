import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

interface UserAttributes {
	name: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class User extends Model<UserAttributes> {
	public readonly id!: number;
	public email!: string;
	public name!: string;

	public createdAt!: Date;
	public updatedAt!: Date;
}

User.init(
	{
		email: {
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
