import imgRoute from "../routes/imagesRoutes/imgRoute";
import supertest from "supertest";

describe('endpoint test' , ()=>{
    it('GET /images/img/img2 should be ok' , ()=>{
        supertest(imgRoute)
        .get('/img2?name=pyramids&width=500&height=500')
        .expect(200)
    })
})