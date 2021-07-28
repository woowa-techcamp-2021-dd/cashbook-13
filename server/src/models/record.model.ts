import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

interface RecordAttributes {
	user_id: number;
	contents: string;
	amount: number;
	category_id: number;
	payment_id: number;
	date: Date;
	createdAt?: Date;
	updatedAt?: Date;
}

export default class Record extends Model<RecordAttributes> {
	public readonly id!: number;
	public user_id!: number;
	public contents!: string;
	public amount!: number;
	public category_id!: number;
	public payment_id!: number;
	public date!: Date;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Record.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		contents: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		payment_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
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
		modelName: 'record',
		tableName: 'records',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
