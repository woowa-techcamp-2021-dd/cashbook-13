"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const git_oauth_middleware_1 = __importDefault(require("../../middlewares/git-oauth.middleware"));
const authRouter = express_1.Router();
git_oauth_middleware_1.default();
authRouter.get('/login/github', passport_1.default.authenticate('github'));
authRouter.get('/login/github/callback', passport_1.default.authenticate('github', {
    failureRedirect: '/fail',
    successRedirect: 'http://ec2-3-35-132-151.ap-northeast-2.compute.amazonaws.com/',
}));
exports.default = authRouter;
