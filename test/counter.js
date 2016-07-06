var expect = require('chai').expect;
var looper = require('../app/counter');
describe("Call function to list out numbers", function() {
    it("Prints out a number from 1-100", function() {
        var looperOutput = looper.simpleLoop(99);

        expect(looperOutput).to.equal("99,100");
    });
});
