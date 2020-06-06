var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
const app = require('../../app');
require("../../models")
const mongoose = require("mongoose");
const Caregiver = mongoose.model("caregiver");
const findCaregiverController = require('../../controllers/findCaregiverController');

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
    var sinon = require('sinon');
    var expect = require('chai').expect;
    var assert = require('chai').assert;
    var should = require('chai').should();
    const app = require('../../app');
    require("../../models")
    const mongoose = require("mongoose");
    const Caregiver = mongoose.model("caregiver");
    const findCaregiverController = require('../../controllers/findCaregiverController');

    describe('findCaregiverController', function () {

        // I just want to remind that using chai is easier to read
        describe('getAllAuthor', function() {
            //Checking length with style~, isntead of assert.equal(res.json.length, 2)
            it("should have length of 2", async function(){
                let newCaregiver = {first_name: 'Candy', last_name:'CANDY', gender:'female', introduction:'hello', username:'candy', age:'20', address:'Melbourne', salary:'20', working_experience:'0', contact_information:'111111'}
                let saveCaregiver =  await new Caregiver(newCaregiver).save();
                expect(saveCaregiver.first_name).to.equal(newCaregiver.first_name);
                expect(saveCaregiver.last_name).to.equal(newCaregiver.last_name);
                expect(saveCaregiver.gender).to.equal(newCaregiver.gender);
                expect(saveCaregiver.introduction).to.equal(newCaregiver.introduction);
                expect(saveCaregiver.username).to.equal(newCaregiver.username);
                expect(saveCaregiver.age).to.equal(newCaregiver.age);
                expect(saveCaregiver.address).to.equal(newCaregiver.address);
                expect(saveCaregiver.salary).to.equal(newCaregiver.salary);
                expect(saveCaregiver.working_experience).to.equal(newCaregiver.working_experience);
                expect(saveCaregiver.contact_information).to.equal(newCaregiver.contact_information);

            })
        })
    });


});


