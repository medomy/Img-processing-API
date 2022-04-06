import express from 'express';
import myMiddleWare from '../../middlewares';
import changePicSize from '../../utils';

const imgRoute : express.Router = express.Router();

imgRoute.get('/img2', myMiddleWare, changePicSize)

export default imgRoute;