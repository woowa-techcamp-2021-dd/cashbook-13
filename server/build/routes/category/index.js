"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../../controllers/category.controller");
const categoryRouter = express_1.Router();
categoryRouter.get('/categories/default', category_controller_1.getDefaultCategoriesController);
categoryRouter.post('/create', category_controller_1.createCategoryController);
exports.default = categoryRouter;
