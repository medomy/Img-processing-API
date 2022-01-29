import express from "express";
import routes from "./routes";
const app = express();
const port : number = 3000;

// creating a get endpoint
app.get("/",(req,res)=>{
    res.send("Hello there,, if you want to see the images go to /images/img/img2 and have fun!!");
})

// making use of my routes as middleware
app.use('/images' , routes);

// creating a server
app.listen(port,()=>{
    console.log(`the server is opened at http://localhost:${port}`);

})