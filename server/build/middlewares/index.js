"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    return res.status(301).redirect('/auth/fail');
};
exports.isAuth = isAuth;
