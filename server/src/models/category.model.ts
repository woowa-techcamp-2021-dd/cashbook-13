import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

interface CategoryAttributes {
	id?: number;
	name: string;
	color: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class Category extends Model<CategoryAttributes> {
	public readonly id!: number;
	public name!: string;
	public color!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Category.init(
	{
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		color: {
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
		modelName: 'category',
		tableName: 'category',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
