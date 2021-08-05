"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("../config/dotenv"));
const { JWT_ACCESS_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN, JWT_ISSUER, JWT_SUBJECT, JWT_SECRET, } = dotenv_1.default;
const getAccessToken = (payload) => {
    const options = {
        expiresIn: JWT_ACCESS_EXPIRES_IN,
        subject: JWT_SUBJECT,
        issuer: JWT_ISSUER,
    };
    return jsonwebtoken_1.default.sign({ user: payload }, JWT_SECRET, options);
};
const getRefreshToken = () => {
    const options = {
        expiresIn: JWT_REFRESH_EXPIRES_IN,
        issuer: JWT_ISSUER,
    };
    return jsonwebtoken_1.default.sign({}, JWT_SECRET, options);
};
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
    catch (e) {
        return null;
    }
};
const jwtService = {
    getAccessToken,
    getRefreshToken,
    verifyToken,
};
exports.default = jwtService;
