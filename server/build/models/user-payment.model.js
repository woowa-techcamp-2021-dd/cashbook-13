"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class UserPayment extends sequelize_1.Model {
}
exports.default = UserPayment;
UserPayment.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    payment_id: {
        type: sequelize_1.DataTypes.INTEGER,
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
    modelName: 'user_payment',
    tableName: 'user_payments',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
