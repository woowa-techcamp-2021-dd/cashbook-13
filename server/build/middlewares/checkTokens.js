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
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
const user_service_1 = __importDefault(require("../services/user.service"));
const dotenv_1 = __importDefault(require("../config/dotenv"));
const { JWT_REFRESH_EXPIRES_IN } = dotenv_1.default;
const checkTokensMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const accessToken = (_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split('Bearer ')[1];
    const refreshToken = req.cookies.refreshToken;
    const isVaildAccessToken = jwt_service_1.default.verifyToken(accessToken);
    const isVaildRefreshToken = jwt_service_1.default.verifyToken(refreshToken);
    if (!isVaildAccessToken && !isVaildRefreshToken) {
        throw Error('API 사용 권한이 없습니다');
    }
    if (!isVaildAccessToken && isVaildRefreshToken) {
        const user = yield user_service_1.default.getUserByRefreshToken(refreshToken);
        const newAccessToken = jwt_service_1.default.getAccessToken({
            id: user.id,
            name: user.name,
        });
        res.status(200).send({
            accessToken: newAccessToken,
            message: '로그인 기간이 만료되어 새로 로그인 되었습니다.',
        });
        next();
    }
    if (isVaildAccessToken && !isVaildRefreshToken) {
        const newRefreshToken = jwt_service_1.default.getRefreshToken();
        yield user_service_1.default.saveRefreshToken(newRefreshToken, isVaildAccessToken.id);
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            expires: new Date(Date.now() + +JWT_REFRESH_EXPIRES_IN * 1000),
        });
        next();
    }
    if (isVaildAccessToken && isVaildRefreshToken) {
        next();
    }
});
exports.default = checkTokensMiddleware;
