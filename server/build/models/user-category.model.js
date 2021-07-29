"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class UserCategory extends sequelize_1.Model {
}
exports.default = UserCategory;
UserCategory.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
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
    modelName: 'user_category',
    tableName: 'user_categories',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
