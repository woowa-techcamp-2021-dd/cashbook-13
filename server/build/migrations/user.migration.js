"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = (name, githubID) => new Promise((resolve, reject) => {
    user_model_1.default.create({
        name,
        githubID,
    });
});
createUser('테스트맨', 'test@naver.com');
