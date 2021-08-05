"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_error_1 = __importDefault(require("../errors/service-error"));
const errorMiddleware = (error, req, res, next) => {
    let status = 500;
    let message = '서버 오류';
    if (error instanceof service_error_1.default) {
        status = error.status;
        message = error.message;
    }
    res.status(status).json({ message });
};
exports.default = errorMiddleware;
