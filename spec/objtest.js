const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;

//require variables and functions
const {cat, addKeyValues, returnString} = require('../src/objects.js');



//Object Tests
describe('Objects', () => {
  
  describe('basic object reviews', () => {

    it('should be an object', () => {
      expect(typeof cat).to.equal('object');
    })

    it('should contain key "name"', () => {
      expect(cat.name).to.exist;
    })

    it('"name" should be a string value', () => {
      expect(typeof cat.name).to.equal('string');
    })

    it('should have more than one key', () => {
      expect(Object.keys(cat).length).to.be.above(1);
    })
  })

  describe('adding array values into object function', () => {

    it('should exist', () => {
      expect(addKeyValues).to.exist;
    })

    it('should be a function', () => {
      expect(typeof addKeyValues).to.equal('function');
    })

    it('return an object with keys as indexes and values as array elements', () => {
      let testArr = ['hello', 'world', 'how', 'are', 'you'];
      let result = {0: 'hello', 1: 'world', 2: 'how', 3: 'are', 4: 'you'};

      expect(addKeyValues(testArr)).to.deep.equal(result);
    })
  })

  describe('return string function', () => {

    it('should exist', () => {
      expect(returnString).to.exist;
    })

    it('should be a function', () => {
      expect(typeof returnString).to.equal('function');
    })

    it('should return a string', () => {
      var result = returnString();
      expect(typeof result).to.equal('string');
    })

    it('should return concatenated string from values of object', () => {
      let obj = {
        a: "hello",
        b: "world",
        c: "what",
        d: "is",
        e: "good"
      }

      expect(returnString(obj)).to.deep.equal("hello world what is good");
    })
  })
})