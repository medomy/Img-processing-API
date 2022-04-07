import { imgDir } from "../../images";
import express from  'express';
import sharp from "sharp";

const changePicSize = (imgName: string, width: number, height: number) => {
    if (isNaN (width) || isNaN (height)) {
        console.log(typeof(width) , typeof(height));
        throw new Error('can not resolve non number queries you put , give width and height a number query')
    }
    else {
        console.log(typeof(width) , typeof(height) , "inside else");
        const initImgName = imgName.split('.')[0];
        const imgExtension: string = imgName.split(".")[1];
        return sharp(imgDir + `/${imgName}`)
            .resize(width || 200, height || 200)
            .toFile(imgDir + `/thumbs/${initImgName + width + height + '.' + imgExtension}`)
            // .then((resolve) => {
            //     res.sendFile(imgDir + `/thumbs/${initImgName + width + height + '.' + imgExtension}`)
            // });
    }

}
export default changePicSize;