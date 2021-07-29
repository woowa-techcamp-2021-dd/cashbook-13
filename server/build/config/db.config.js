"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.dbConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbConfig = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    DB: process.env.DB || 'typescript_test',
    PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT || 3306,
    dialect: 'mysql',
};
exports.pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000, // 연결이 해제되기 전 유휴 상태일 수 있는 최대 시간
};
