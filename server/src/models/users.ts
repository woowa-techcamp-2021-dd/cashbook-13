import {
	Sequelize,
	DataTypes,
	Model,
	Optional,
	HasManyGetAssociationsMixin,
	HasManyAddAssociationMixin,
	HasManyHasAssociationMixin,
	HasManyCountAssociationsMixin,
	HasManyCreateAssociationMixin,
	Association,
} from 'sequelize';
import { sequelize } from '.';

interface UserAttributes {
	// id: number;
	name: string;
	email: string;
}

export class Users_test extends Model<UserAttributes> {
	public readonly id!: number;
	public email!: string;
	public name!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Users_test.init(
	{
		email: {
			type: DataTypes.STRING(45),
			allowNull: true,
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
	},
	{
		modelName: 'user',
		tableName: 'user',
		sequelize,
		freezeTableName: true,
		timestamps: true,
		updatedAt: 'updateTimestamp',
	}
);
