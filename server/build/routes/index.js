"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const category_1 = __importDefault(require("./category"));
const record_1 = __importDefault(require("./record"));
const user_category_1 = __importDefault(require("./user-category"));
const apiRouter = express_1.Router();
apiRouter.use('/auth', auth_1.default);
apiRouter.use('/category', category_1.default);
apiRouter.use('/record', record_1.default);
apiRouter.use('/user/category', user_category_1.default);
// apiRouter.use('/auth', authRouter);
exports.default = apiRouter;
