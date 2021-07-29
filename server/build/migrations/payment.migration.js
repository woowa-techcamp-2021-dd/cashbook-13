"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_model_1 = __importDefault(require("../models/payment.model"));
const createPayment = (method) => new Promise((resolve, reject) => {
    payment_model_1.default.create({ method });
});
