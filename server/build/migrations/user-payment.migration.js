"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_payment_model_1 = __importDefault(require("../models/user-payment.model"));
const createUserPayment = (user_id, payment_id) => new Promise((resolve, reject) => {
    user_payment_model_1.default.create({
        user_id,
        payment_id,
    });
});
