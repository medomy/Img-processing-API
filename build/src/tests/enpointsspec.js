"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imgRoute_1 = __importDefault(require("../routes/imagesRoutes/imgRoute"));
const supertest_1 = __importDefault(require("supertest"));
describe('endpoint test', () => {
    it('GET /images/img/img2 should be ok', () => {
        (0, supertest_1.default)(imgRoute_1.default)
            .get('/img2?name=pyramids&width=500&height=500')
            .expect(200);
    });
});
