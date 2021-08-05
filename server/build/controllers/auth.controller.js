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
const user_service_1 = __importDefault(require("../services/user.service"));
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
const dotenv_1 = __importDefault(require("../config/dotenv"));
const service_error_1 = __importDefault(require("../errors/service-error"));
const { JWT_ACCESS_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN } = dotenv_1.default;
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    yield user_service_1.default.register(name);
    res.status(200).json({ message: '회원가입에 성공했습니다!' });
});
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const user = yield user_service_1.default.signin(name);
    const refreshToken = jwt_service_1.default.getRefreshToken();
    const result = yield user_service_1.default.saveRefreshToken(refreshToken, user.id);
    const accessToken = jwt_service_1.default.getAccessToken({
        id: user.id,
        name: user.name,
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + +JWT_REFRESH_EXPIRES_IN * 1000),
    });
    res.status(200).json({
        message: '로그인에 성공했습니다!',
        accessToken,
        JWT_ACCESS_EXPIRES_IN,
    });
});
const signout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const accessToken = (_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split('Bearer ')[1];
    const decoded = jwt_service_1.default.verifyToken(accessToken);
    if (!decoded) {
        throw new service_error_1.default(400, '유효하지 않은 토큰입니다');
    }
    const { id } = decoded;
    yield user_service_1.default.signout(id);
    res.send(200).json({
        message: '로그아웃 되었습니다.',
    });
});
const silentRefresh = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const user = yield user_service_1.default.getUserByRefreshToken(refreshToken);
    const newAccessToken = jwt_service_1.default.getAccessToken({
        id: user.id,
        name: user.name,
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + +JWT_REFRESH_EXPIRES_IN * 1000),
    });
    res.status(200).send({
        accessToken: newAccessToken,
        message: '로그인 기간이 만료되어 새로 로그인 되었습니다.',
        JWT_ACCESS_EXPIRES_IN,
    });
});
const authController = {
    signup,
    signin,
    signout,
    silentRefresh,
};
exports.default = authController;
