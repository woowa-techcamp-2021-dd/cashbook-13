"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_category_model_1 = __importDefault(require("../models/user-category.model"));
const createUserCategory = (user_id, category_id) => new Promise((resolve, reject) => {
    user_category_model_1.default.create({ user_id, category_id });
});
