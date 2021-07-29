"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const record_controller_1 = require("../../controllers/record.controller");
const recordRouter = express_1.Router();
recordRouter.get('/', record_controller_1.getRecord);
exports.default = recordRouter;
