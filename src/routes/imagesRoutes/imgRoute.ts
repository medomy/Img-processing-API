import express from 'express';
import myMiddleWare from '../../middlewares';
import { promises as fsPromises, readFile } from 'fs';
import { imgDir } from '../../images';
import sharp from 'sharp';

const imgRoute = express.Router();

imgRoute.get('/img2', myMiddleWare, (req: express.Request, res: express.Response) => {
    if (!req.query.name) {
        res.send("in the url enter a name query to get your picture like this , ?name=example&height=500&width=500 , note that width and height are optional")
    }
    else {
        const readFolder = async () => {
            const files = await fsPromises.readdir(imgDir);
            return files;
        }
        readFolder().then((files) => {
            const myImg = files.find((ele)=> ele.split(".")[0] === req.query.name);
            if(myImg){
                if(req.query.height || req.query.width){
                    const initMyImg : string = myImg.split(".")[0];
                    const myImgExtension : string = myImg.split(".")[1];
                    sharp(imgDir + `/${myImg}`)
                    .resize(Number(req.query.width) || 200 , Number(req.query.height) || 200)
                    .toFile(imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.' +myImgExtension }`)
                    .then((resolve)=>{
                        res.sendFile(imgDir + `/thumbs/${initMyImg + req.query.width + req.query.height + '.'+myImgExtension}`)
                    }); 
                }
                else{
                    res.sendFile(imgDir + `/${myImg}`);
                }
            }
            else{
                res.send('no such an image in your src/images directory');
            }         
        })
    }
})

export default imgRoute;