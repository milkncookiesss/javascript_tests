const assert = require('assert');
// const assert = require('chai').assert();
const should = require('chai').should();
const expect = require('chai').expect();

describe('Array', () => {
  describe('Fun with Arrays', () => {
    it('should exist', () => {
      var arr = [];
      assert.should.exist(arr);
    })
    it('should return -1 when the value is no present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    })
  })
})