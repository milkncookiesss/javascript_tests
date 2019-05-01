// const assert = require('assert');
const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;
//have files required from src here

// define(['../src/jsreview.js'])
const array = require('../src/arrays.js')
//have before hooks (if needed) here

describe('Array', () => {
  it('should be an array', () => {
    expect(Array.isArray(array.arr)).to.equal(true);
  })
  it('should have length of 5', () => {
    expect(array.arr.length).to.equal(5);
  })
  it('should exist', () => {
    expect(typeof array.findOddNums).to.equal('function');
  })
  it('should return array of odd numbers', () => {
    var newArr = [1,[2],{a: 15},4,"5",6,7,]
    expect(array.findOddNums(newArr)).to.deep.equal([1,7])
  })
})

