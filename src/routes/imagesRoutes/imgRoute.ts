import express from 'express';
import myMiddleWare from '../../middlewares';
import checkPicSize from '../../utils';

const imgRoute : express.Router = express.Router();

imgRoute.get('/img2', myMiddleWare, checkPicSize)

export default imgRoute;