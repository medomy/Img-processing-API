import imgRoute from "../routes/imagesRoutes/imgRoute";
import supertest from "supertest";

describe('endpoint test' , ()=>{
    it('GET /images/img/img2 should be ok' , ()=>{
        supertest(imgRoute)
        .get('/img2')
        .expect(200)
    })
})