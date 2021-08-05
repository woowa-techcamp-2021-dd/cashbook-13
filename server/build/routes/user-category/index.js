"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_category_controller_1 = require("../../controllers/user-category.controller");
const userCategoryRouter = express_1.Router();
userCategoryRouter.post('/create', user_category_controller_1.createUserCategoryController);
exports.default = userCategoryRouter;
