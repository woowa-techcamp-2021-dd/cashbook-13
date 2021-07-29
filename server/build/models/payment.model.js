"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Payment extends sequelize_1.Model {
}
exports.default = Payment;
Payment.init({
    method: {
        type: sequelize_1.DataTypes.STRING,
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
    modelName: 'payment',
    tableName: 'payments',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
