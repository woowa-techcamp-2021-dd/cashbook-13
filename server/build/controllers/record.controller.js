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
exports.getRecord = void 0;
const record_service_1 = __importDefault(require("../services/record.service"));
const getRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n ####### getRecord #######');
    console.log('req.session : ', req.session);
    console.log('req.passport.user : ', req.user);
    const { userID } = req.query;
    const record = yield record_service_1.default(Number(userID));
    res.status(200).json({ record });
});
exports.getRecord = getRecord;
