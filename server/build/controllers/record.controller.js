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
exports.addRecord = exports.getRecord = void 0;
const record_service_1 = require("../services/record.service");
const getRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n ####### getRecord #######');
    console.log('req.session : ', req.session);
    console.log('req.passport.user : ', req.user);
    const date = String(req.query.date);
    const record = yield record_service_1.getRecordService(1, date);
    res.status(200).json({ record });
});
exports.getRecord = getRecord;
const addRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, category_id, payment_id, contents, amount, io, date } = req.body;
    const record = yield record_service_1.addRecordService(user_id, category_id, payment_id, contents, amount, io, date);
    res.status(200).json({
        category_id: record.category_id,
        payment_id: record.payment_id,
        contents: record.contents,
        amount: record.amount,
        io: record['I/O'],
        date: record.date,
        createAt: record.createdAt,
        updateAt: record.updatedAt,
        user_id: record.user_id,
        id: record.id,
    });
});
exports.addRecord = addRecord;
