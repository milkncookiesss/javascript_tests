const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;
//have files required from src here

// define(['../src/jsreview.js'])
// const array = require('../src/arrays.js');
const {arr, first, last, findOddNums, findSum} = require('../src/arrays.js');
// const func = require('../src/functions.js');
//have before hooks (if needed) here

// Array Tests
describe('Array', () => {
  
  it('should be an array', () => {
    expect(Array.isArray(arr)).to.equal(true);
  })
  
  it('should have length of 6', () => {
    expect(arr.length).to.equal(6);
  })
  
  it('should contain a string', () => {
    var string = arr[arr.length - 1];
    expect(typeof string).to.equal('string');
  })
  
  describe('Array First Function', () => {
    
    it('should exist', () => {
      expect(typeof first).to.equal('function');
    })
    
    it('should return the first element of an array', () => {
      var newArr = [];
      newArr.push(1);
      newArr.push('hello');
      expect(first(newArr)).to.equal(1);
    })
  })
  
  describe('Array Last Function', () => {
    
    it('should exist', () => {
      expect(typeof last).to.equal('function');
    })
    
    it('should return the last element of an array', () => {
      var newArr = [];
      newArr.push('hello');
      newArr.push('world');
      newArr.push(15);
      expect(last(newArr)).to.equal(15);
    })
  })
  
  describe('Array function practice', () => {
    
    it('should be a function', () => {
      expect(typeof findOddNums).to.equal('function');
    })
    
    it('should return array of odd numbers', () => {
      var newArr = [1,[2],{a: 15},4,"5",6,7,]
      expect(findOddNums(newArr)).to.deep.equal([1,7])
    })
    
    it('should return the sum of an array', () => {
      var newArr = [1,2,3,4,5,6];
      expect(findSum(newArr)).to.equal(21);
    })
    
    it('should return the sum of the array that contains nested arrays', () => {
      var newArr = [1,2,3,[4,5,6],7,8,9];
      expect(findSum(newArr)).to.equal(45);
    })
  })
})

//Object Tests
describe('Objects', () => {
  const {cat, addKeyValues, returnString} = require('../src/objects.js');
  
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

