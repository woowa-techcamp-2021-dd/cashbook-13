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
const user_model_1 = __importDefault(require("../models/user.model"));
const category_model_1 = __importDefault(require("../models/category.model"));
const payment_model_1 = __importDefault(require("../models/payment.model"));
const record_model_1 = __importDefault(require("../models/record.model"));
const user_category_model_1 = __importDefault(require("../models/user-category.model"));
const user_payment_model_1 = __importDefault(require("../models/user-payment.model"));
const MODELS = [user_model_1.default, category_model_1.default, payment_model_1.default, record_model_1.default, user_category_model_1.default, user_payment_model_1.default];
function createTables() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('======Create Table======');
        yield Promise.all(MODELS.map((model) => __awaiter(this, void 0, void 0, function* () {
            yield model
                .sync({ force: true })
                .then(() => {
                console.log(`✅Success Create ${model.tableName} Table`);
            })
                .catch((err) => {
                console.log(`❗️Error in Create ${model.tableName} Table `, err);
            });
        }))).then(() => {
            console.log('======Complate create Table!======');
        });
    });
}
createTables();
