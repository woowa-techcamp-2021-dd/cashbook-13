import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

interface PaymentAttributes {
	method: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class Payment extends Model<PaymentAttributes> {
	public readonly id!: number;
	public method!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Payment.init(
	{
		method: {
			type: DataTypes.STRING,
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
		modelName: 'payment',
		tableName: 'payments',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
