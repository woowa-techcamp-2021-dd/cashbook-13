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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const models_1 = require("./models");
const routes_1 = __importDefault(require("./routes"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
dotenv_1.default.config();
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: false }));
app.use(express_1.default.static('public'));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(express_session_1.default({ secret: 'SECET_CODE', resave: true, saveUninitialized: false }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/api', routes_1.default);
app.get('/success', (_, res) => {
    res.send('<h1>로그인 축축</h1>');
});
app.get('/fail', (_, res) => {
    res.send('<h1>뚱인데요?</h1>');
});
app.get('/', (_, res) => {
    res.send('<h1>우아한 가계부 13팀 서버입니다.</h1>');
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`server on ${PORT}`);
    yield models_1.sequelize
        .authenticate()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log('connection success');
    }))
        .catch((e) => {
        console.log('not connection');
    });
}));
