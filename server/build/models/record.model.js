"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Record extends sequelize_1.Model {
}
exports.default = Record;
Record.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    contents: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    payment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    modelName: 'record',
    tableName: 'records',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
