import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

export enum IO {
	in = 'in',
	out = 'out',
}

interface RecordAttributes {
	'user_id': number;
	'contents': string;
	'amount': number;
	'category_id': number;
	'payment_id': number;
	'date': Date;
	'createdAt'?: Date;
	'updatedAt'?: Date;
	'I/O': IO;
}

export default class Record extends Model<RecordAttributes> {
	public readonly 'id'!: number;
	public 'user_id'!: number;
	public 'contents'!: string;
	public 'amount'!: number;
	public 'category_id'!: number;
	public 'payment_id'!: number;
	public 'date'!: Date;
	public 'I/O'!: IO;

	public readonly 'createdAt'!: Date;
	public readonly 'updatedAt'!: Date;
}

Record.init(
	{
		'user_id': {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		'contents': {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		'amount': {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		'category_id': {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		'payment_id': {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		'date': {
			type: DataTypes.DATE,
			allowNull: false,
		},
		'I/O': {
			type: DataTypes.ENUM,
			values: ['in', 'out'],
			allowNull: false,
		},
		'createdAt': {
			type: 'TIMESTAMP',
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		'updatedAt': {
			type: 'TIMESTAMP',
			allowNull: false,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
	},
	{
		modelName: 'record',
		tableName: 'record',
		sequelize,
		freezeTableName: true,
		timestamps: true,
	}
);
