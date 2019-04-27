// const assert = require('assert');
const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;
//have files required from src here


//have before hooks (if needed) here





//array practice
describe('Array', () => {
  describe('Fun with Arrays', () => {
    it('should exist', () => {
      var arr = {};
      assert.isArray(arr, 'is array');
    })
    it('should return -1 when the value is no present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    })
  })
})

//object practice
describe('Objects', () => {

});

//function practice
describe('Functions', () => {

});