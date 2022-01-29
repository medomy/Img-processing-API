import express from 'express';

const myMiddleWare = (req:express.Request , res : express.Response , next : Function) : void=>{
    console.log (req.url, "was visited" , "from middle ware");
    next();
}
export default myMiddleWare;