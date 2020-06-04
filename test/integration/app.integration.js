var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const Caregiver = require('../../models/caregiver');

// This section of simulate a test when your application IS RUNNING, we are testing by DECLARING ROUTES, and see if it returns the correct data
describe('integration test', function() {
    describe('getAllCaregiver', function(){
        context('check if we can get all caregiver', function(){
            it('get all authors', function(done){
                supertest(app)
                .get('/findCaregiver')
                .send({})
                .end(function(err, res) {
                    // if you don't understand or unsure where does res.body or res.statusCode come form, read more regarding HTTP response
                    // or even better read the whole Hypertext Transfer Protocol (HTTP) request-respond protocol
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal(Caregiver);
                    res.body.forEach(element=>{
                        expect(element).to.have.property('username');
                    })
                    done();
                })
            })
        })
    });
})