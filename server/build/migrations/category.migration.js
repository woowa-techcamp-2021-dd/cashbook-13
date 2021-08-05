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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultCategories = exports.createCategory = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const sequelize_1 = require("sequelize");
const createCategory = (name, color) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.create({
        name,
        color,
    });
});
exports.createCategory = createCategory;
const getDefaultCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.findAll({
        where: {
            id: { [sequelize_1.Op.between]: [1, 10] },
        },
    });
});
exports.getDefaultCategories = getDefaultCategories;
