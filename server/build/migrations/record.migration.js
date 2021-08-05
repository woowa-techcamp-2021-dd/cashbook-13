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
exports.addRecord = exports.getRecord = exports.createRecord = void 0;
const record_model_1 = __importDefault(require("../models/record.model"));
const sequelize_1 = require("sequelize");
const createRecord = (user_id, contents, amount, category_id, payment_id, date, IO) => new Promise((resolve, reject) => {
    record_model_1.default.create({
        user_id,
        contents,
        amount,
        category_id,
        payment_id,
        date,
        'I/O': IO,
    });
});
exports.createRecord = createRecord;
const getRecord = (user_id, date) => __awaiter(void 0, void 0, void 0, function* () {
    const startDate = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}`)
        .toISOString()
        .replace('T', ' ')
        .substr(0, 19);
    const endDate = new Date(Number(date.slice(0, 4)), Number(date.slice(4, 6)))
        .toISOString()
        .replace('T', ' ')
        .substr(0, 19)
        .replace('15:00:00', '23:59:59');
    console.log(startDate, endDate);
    return yield record_model_1.default.findAll({
        where: {
            user_id,
            date: { [sequelize_1.Op.between]: [startDate, endDate] },
        },
        order: [['date', 'DESC']],
    });
});
exports.getRecord = getRecord;
const addRecord = (user_id, category_id, payment_id, contents, amount, io, date) => __awaiter(void 0, void 0, void 0, function* () {
    return yield record_model_1.default.create({
        user_id,
        'category_id': 1,
        'payment_id': 1,
        contents,
        amount,
        'I/O': io,
        date,
    });
});
exports.addRecord = addRecord;
