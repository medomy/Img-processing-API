"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myMiddleWare = (req, res, next) => {
    console.log(req.url, "was visited", "from middle ware");
    next();
};
exports.default = myMiddleWare;
