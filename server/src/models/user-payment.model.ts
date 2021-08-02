import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

interface UserPaymentAttributes {
	user_id: number;
	payment_id: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class UserPayment extends Model<UserPaymentAttributes> {
	public readonly id!: number;
	public user_id!: number;
	public payment_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

UserPayment.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		payment_id: {
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
		modelName: 'user_payment',
		tableName: 'user_payment',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
