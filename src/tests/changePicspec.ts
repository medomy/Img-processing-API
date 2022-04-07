import changePicSize from "../handlers/changePicSize";

describe('changePic function tests' , ()=>{
    it('should be defined' ,()=>{
        expect(changePicSize).toBeDefined;
    })

    it('should return error when passed NAN width or height' ,async ()=>{
        // can not resolve non number queries you put , give width and height a number query
       // expectAsync(await changePicSize("pyramids.jpg", Number("an") , Number("an"))).toBeRejectedWithError('Error: can not resolve non number queries you put , give width and height a number query');
       expect(()=>changePicSize("pyramids.jpg", Number("an") , Number("an"))).toThrowError('can not resolve non number queries you put , give width and height a number query');
    })
})