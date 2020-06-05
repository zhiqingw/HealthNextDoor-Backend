var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
const app = require('../../a');
var findCaregiverController =  require('../../controllers/findCaregiverController');


describe('findCaregiverController', function () {
    // Below, we are going to test HTTP functions, so we need to create fake request and respond object!

    const mockResponse = (fake) => {
        return {
            send: fake
        };
    }

    // this is just example how you can design the fake request, you can also add header property if your website needs one!
    // I'm not even going to use any of these stuff inside request
    const mockRequest = (session, body) => ({
        session,
        body,
    });

    // I just want to remind that using chai is easier to read
    describe('getAllAuthor', function() {
        //Checking length with style~, isntead of assert.equal(res.json.length, 2)
        it("Author should have id, first_name, and last_name", function(){
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);

            findCaregiverController.getAllCaregivers(req,res)
            const result = fake.lastArg;

            result.forEach(element => {
                expect(element).to.have.property('username');//check one with chai

            });
        })
    })
});


