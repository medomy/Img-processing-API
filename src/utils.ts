import express from 'express';
import { promises as fsPromises, readFile } from 'fs';
import { imgDir } from '../images';
import changePicSize from './handlers/changePicSize';

const checkPicSize = async (req: express.Request, res: express.Response) => {
    try {
        console.log(req.query);
        if (!req.query.name) {
            res.send("in the url enter a name query to get your picture like this , ?name=example&height=500&width=500 , note that width and height are optional")
        }
        else {
            const files: string[] = await fsPromises.readdir(imgDir);
            const myImg: string | null = files.find((ele) => ele.split(".")[0] === req.query.name) || null;
            if (myImg) {
                if (req.query.height || req.query.width) {
                    const initMyImg: string = myImg.split(".")[0];
                    const myImgExtension: string = myImg.split(".")[1];
                    // checking the existence of img in thumbs
                    const thumbs = await fsPromises.readdir(`${imgDir}/thumbs`);
                    console.log(thumbs);
                    if (thumbs.includes(`${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`)) {
                        console.log("includes");
                        res.sendFile(imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`);
                    }
                    else {
                        const changePic = await changePicSize(myImg,Number(req.query.width), Number(req.query.height));
                        res.sendFile(imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.' + myImgExtension}`);
                    }
                }
                else {
                    res.sendFile(imgDir + `/${myImg}`);
                }
            }
            else {
                res.send('no such an image in your src/images directory');
            }
        }

    } catch (err) {
        res.status(400).send(`${err}`);
    }

}
export default checkPicSize;
