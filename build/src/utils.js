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
const fs_1 = require("fs");
const images_1 = require("../images");
const sharp_1 = __importDefault(require("sharp"));
const changePicSize = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.name) {
        res.send("in the url enter a name query to get your picture like this , ?name=example&height=500&width=500 , note that width and height are optional");
    }
    else {
        const files = yield fs_1.promises.readdir(images_1.imgDir);
        const myImg = files.find((ele) => ele.split(".")[0] === req.query.name);
        if (myImg) {
            if (req.query.height || req.query.width) {
                const initMyImg = myImg.split(".")[0];
                const myImgExtension = myImg.split(".")[1];
                // checking the existence of img in thumbs
                const thumbs = yield fs_1.promises.readdir(`${images_1.imgDir}/thumbs`);
                console.log(thumbs);
                if (thumbs.includes(`${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`)) {
                    console.log("includes");
                    res.sendFile(images_1.imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`);
                }
                else {
                    (0, sharp_1.default)(images_1.imgDir + `/${myImg}`)
                        .resize(Number(req.query.width) || 200, Number(req.query.height) || 200)
                        .toFile(images_1.imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`)
                        .then((resolve) => {
                        res.sendFile(images_1.imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`);
                    });
                }
            }
            else {
                res.sendFile(images_1.imgDir + `/${myImg}`);
            }
        }
        else {
            res.send('no such an image in your src/images directory');
        }
    }
});
exports.default = changePicSize;
