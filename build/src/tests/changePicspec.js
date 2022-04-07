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
const changePicSize_1 = __importDefault(require("../handlers/changePicSize"));
describe('changePic function tests', () => {
    it('should be defined', () => {
        expect(changePicSize_1.default).toBeDefined;
    });
    it('should return error when passed NAN width or height', () => __awaiter(void 0, void 0, void 0, function* () {
        // can not resolve non number queries you put , give width and height a number query
        // expectAsync(await changePicSize("pyramids.jpg", Number("an") , Number("an"))).toBeRejectedWithError('Error: can not resolve non number queries you put , give width and height a number query');
        expect(yield (0, changePicSize_1.default)("pyramids.jpg", Number("an"), Number("an"))).toThrow(new Error('can not resolve non number queries you put , give width and height a number query'));
    }));
});
