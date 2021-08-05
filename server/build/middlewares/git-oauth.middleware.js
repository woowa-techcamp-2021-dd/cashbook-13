"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_github_1 = require("passport-github");
const githubConfig = {
    clientID: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRETS || '',
    callbackURL: process.env.GITHUB_CLIENT_CALLBACK_URL || '',
};
const githubPassport = () => {
    passport_1.default.serializeUser((user, done) => {
        done(null, user);
    });
    passport_1.default.deserializeUser((user, cb) => {
        cb(null, user);
    });
    passport_1.default.use('github', new passport_github_1.Strategy(githubConfig, (accessToken, refreshToken, profile, callback) => {
        try {
            const { _json } = profile;
            const { login, id, node_id } = _json;
            return callback(null, { login, id, node_id });
        }
        catch (error) {
            return callback(null, {}, { msg: '에뤄에뤄' });
        }
    }));
};
exports.default = githubPassport;
