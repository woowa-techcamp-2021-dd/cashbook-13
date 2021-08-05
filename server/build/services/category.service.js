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
exports.createCategoryService = exports.getDefaultCategoriesService = void 0;
const category_migration_1 = require("../migrations/category.migration");
const getDefaultCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const defaultCategories = yield category_migration_1.getDefaultCategories();
    return defaultCategories;
});
exports.getDefaultCategoriesService = getDefaultCategoriesService;
const createCategoryService = (name, color) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_migration_1.createCategory(name, color);
    return category;
});
exports.createCategoryService = createCategoryService;
