"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require(".");
class User extends sequelize_typescript_1.Model {
}
exports.default = User;
User.init({
    name: {
        type: sequelize_typescript_1.DataType.STRING(45),
        allowNull: false,
    },
    githubID: {
        type: sequelize_typescript_1.DataType.STRING(45),
        allowNull: true,
    },
    refresh_token: {
        type: sequelize_typescript_1.DataType.STRING(200),
        allowNull: true,
    },
    createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    modelName: 'user',
    tableName: 'user',
    sequelize: _1.sequelize,
    freezeTableName: true,
    timestamps: true,
});
