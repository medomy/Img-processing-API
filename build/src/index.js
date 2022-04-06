"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
// creating a get endpoint
app.get("/", (req, res) => {
    res.send("Hello there,, if you want to see the images go to /images/img/img2 and have fun!!");
});
// making use of my routes as middleware
app.use('/images', routes_1.default);
// creating a server
app.listen(port, () => {
    console.log(`the server is opened at http://localhost:${port}`);
});
exports.default = app;
