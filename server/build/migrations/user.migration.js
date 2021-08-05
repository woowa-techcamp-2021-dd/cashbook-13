"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByRefreshToken = exports.signoutUser = exports.insertRefreshTokenToUser = exports.findUser = exports.registerUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const registerUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOrCreate({
        where: { name },
        defaults: { name },
        attributes: ['id'],
    });
    return result;
});
exports.registerUser = registerUser;
const findUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({
        where: { name },
        attributes: ['id', 'name'],
    });
    return user;
});
exports.findUser = findUser;
const insertRefreshTokenToUser = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.update({ refresh_token: token }, {
        where: {
            id,
        },
    });
    return result;
});
exports.insertRefreshTokenToUser = insertRefreshTokenToUser;
const signoutUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.update({ refresh_token: null }, { where: { id } });
    return result;
});
exports.signoutUser = signoutUser;
const findUserByRefreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({
        where: { refresh_token: token },
        attributes: ['id', 'name'],
    });
    return user;
});
exports.findUserByRefreshToken = findUserByRefreshToken;
