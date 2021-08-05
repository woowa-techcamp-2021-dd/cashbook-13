"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = __importDefault(require("../../controllers/auth.controller"));
const git_oauth_middleware_1 = __importDefault(require("../../middlewares/git-oauth.middleware"));
const wrap_async_1 = __importDefault(require("../../middlewares/wrap-async"));
const authRouter = express_1.Router();
git_oauth_middleware_1.default();
authRouter.post('/signup', wrap_async_1.default(auth_controller_1.default.signup));
authRouter.post('/signin', wrap_async_1.default(auth_controller_1.default.signin));
authRouter.put('/silent-refresh', wrap_async_1.default(auth_controller_1.default.silentRefresh));
authRouter.delete('/signout', wrap_async_1.default(auth_controller_1.default.signout));
authRouter.get('/signin/github', passport_1.default.authenticate('github'));
authRouter.get('/signin/github/callback', passport_1.default.authenticate('github', {
    failureRedirect: '/fail',
    successRedirect: 'http://localhost:8080',
}));
exports.default = authRouter;
