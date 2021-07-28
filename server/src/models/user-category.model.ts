import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

interface UserCategoryAttributes {
	user_id: number;
	category_id: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class UserCategory extends Model<UserCategoryAttributes> {
	public readonly id!: number;
	public user_id!: number;
	public category_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

UserCategory.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
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
		modelName: 'user_category',
		tableName: 'user_categories',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
