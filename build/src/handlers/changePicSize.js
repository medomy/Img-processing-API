"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const images_1 = require("../../images");
const sharp_1 = __importDefault(require("sharp"));
const changePicSize = (imgName, width, height) => {
    if (isNaN(width) || isNaN(height)) {
        console.log(typeof (width), typeof (height));
        throw new Error('can not resolve non number queries you put , give width and height a number query');
    }
    else {
        console.log(typeof (width), typeof (height), "inside else");
        const initImgName = imgName.split('.')[0];
        const imgExtension = imgName.split(".")[1];
        return (0, sharp_1.default)(images_1.imgDir + `/${imgName}`)
            .resize(width || 200, height || 200)
            .toFile(images_1.imgDir + `/thumbs/${initImgName + width + height + '.' + imgExtension}`);
        // .then((resolve) => {
        //     res.sendFile(imgDir + `/thumbs/${initImgName + width + height + '.' + imgExtension}`)
        // });
    }
};
exports.default = changePicSize;
