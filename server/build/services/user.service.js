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
const user_migration_1 = require("../migrations/user.migration");
const service_error_1 = __importDefault(require("../errors/service-error"));
const register = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const [user, created] = yield user_migration_1.registerUser(name);
    if (!created) {
        throw new service_error_1.default(409, '사용중인 유저 네임입니다.');
    }
    return user;
});
const signin = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_migration_1.findUser(name);
    if (!user) {
        throw new service_error_1.default(400, '해당 유저가 존재하지 않습니다.');
    }
    return user;
});
const signout = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_migration_1.signoutUser(id);
    if (!result) {
        throw new service_error_1.default(400, 'refreshToken 제거 실패');
    }
});
const saveRefreshToken = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield user_migration_1.insertRefreshTokenToUser(token, id);
    if (!res[0]) {
        throw new service_error_1.default(400, '리프레시 토큰 저장 실패');
    }
});
const getUserByRefreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_migration_1.findUserByRefreshToken(token);
    if (!user) {
        throw new service_error_1.default(400, '유효하지 않은 토큰');
    }
    return user;
});
const userService = {
    register,
    signin,
    signout,
    saveRefreshToken,
    getUserByRefreshToken,
};
exports.default = userService;
