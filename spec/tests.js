const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;
//have files required from src here

// define(['../src/jsreview.js'])
const array = require('../src/arrays.js');
const obj = require('../src/objects.js');
const func = require('../src/functions.js');
//have before hooks (if needed) here

describe('Array', () => {
    
  it('should be an array', () => {
    expect(Array.isArray(array.arr)).to.equal(true);
  })

  it('should have length of 6', () => {
    expect(array.arr.length).to.equal(6);
  })

  it('should contain a string', () => {
    var string = array.arr[array.arr.length - 1];
    expect(typeof string).to.equal('string');
  })

  describe('Array First Function', () => {

    it('should exist', () => {
      expect(typeof array.first).to.equal('function');
    })

    it('should return the first element of an array', () => {
      var newArr = [];
      newArr.push(1);
      newArr.push('hello');
      expect(array.first(newArr)).to.equal(1);
    })
  })

  describe('Array Last Function', () => {

    it('should exist', () => {
      expect(typeof array.last).to.equal('function');
    })

    it('should return the last element of an array', () => {
      var newArr = [];
      newArr.push('hello');
      newArr.push('world');
      newArr.push(15);
      expect(array.last(newArr)).to.equal(15);
    })
  })

  describe('Array function practice', () => {

    it('should return array of odd numbers', () => {
      var newArr = [1,[2],{a: 15},4,"5",6,7,]
      expect(array.findOddNums(newArr)).to.deep.equal([1,7])
    })

    it('should return the sum of an array', () => {
      var newArr = [1,2,3,4,5,6];
      expect(array.findSum(newArr)).to.equal(21);
    })

    it('should return the sum of the array that contains nested arrays', () => {
      var newArr = [1,2,3,[4,5,6],7,8,9];
      expect(array.findSum(newArr)).to.equal(45);
    })
  })
})

mocha.run();