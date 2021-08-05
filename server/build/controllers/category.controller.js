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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = exports.getDefaultCategoriesController = void 0;
const category_service_1 = require("../services/category.service");
const getDefaultCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_service_1.getDefaultCategoriesService();
    res.status(200).json({ categories });
});
exports.getDefaultCategoriesController = getDefaultCategoriesController;
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, color } = req.body;
    const category = yield category_service_1.createCategoryService(name, color);
    res.status(200).json({ category });
});
exports.createCategoryController = createCategoryController;
