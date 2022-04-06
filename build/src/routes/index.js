"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imgRoute_1 = __importDefault(require("./imagesRoutes/imgRoute"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send("hello from first Route in images you still have one route /img2 to go");
});
routes.use('/img', imgRoute_1.default);
exports.default = routes;
