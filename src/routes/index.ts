import express from 'express';
import imgRoute from './imagesRoutes/imgRoute';


const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send("hello from first Route in images you still have one route /img2 to go");
})

routes.use('/img',imgRoute);


export default routes;