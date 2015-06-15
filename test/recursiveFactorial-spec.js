var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var recursiveFactorial = require('../js/recursiveFactorial.js');

describe('Factorial', function () {
  var rFactorial;

  it('should be a function', function(){
    recursiveFactorial.recursiveFactorial.should.be.a("function");
  });

  it('should throw an error if an invalid argument is given', function () {
    expect(recursiveFactorial.recursiveFactorial.bind(rFactorial,'test')).to.throw("INPUT MUST BE A NUMBER");
  });

  describe('checks', function () {

    it('should return the value 120',function(){
      recursiveFactorial.recursiveFactorial(5).should.equal(120);
    });

    it('should return the value 24',function(){
      recursiveFactorial.recursiveFactorial(4).should.equal(24);
    })  

  });

});