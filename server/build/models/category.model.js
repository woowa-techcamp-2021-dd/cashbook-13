"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Category extends sequelize_1.Model {
}
exports.default = Category;
Category.init({
    name: {
        type: sequelize_1.DataTypes.STRING(45),
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
    modelName: 'category',
    tableName: 'categories',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
