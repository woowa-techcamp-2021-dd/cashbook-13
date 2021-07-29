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
exports.getRecord = exports.createRecord = void 0;
const record_model_1 = __importDefault(require("../models/record.model"));
const createRecord = (user_id, contents, amount, category_id, payment_id, date) => new Promise((resolve, reject) => {
    record_model_1.default.create({
        user_id,
        contents,
        amount,
        category_id,
        payment_id,
        date,
    });
});
exports.createRecord = createRecord;
const getRecord = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield record_model_1.default.findAll({
        where: {
            user_id,
        },
    });
});
exports.getRecord = getRecord;
