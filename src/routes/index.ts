import express from 'express';
import imgRoute from './imagesRoutes/imgRoute';


const routes : express.Router = express.Router();

routes.get('/',(req: express.Request, res: express.Response)=>{
    res.send("hello from first Route in images you still have one route /img2 to go");
})

routes.use('/img',imgRoute);


export default routes;