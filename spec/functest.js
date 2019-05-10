const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;


describe('functional programming', () => {

  describe('sum function', () => {

    it('should be a function', () => {
      expect(typeof sum).to.equal('function');
    })

    it('should return sum of two numbers', () => {
      expect(sum()).to.equal();
    })
  })

  describe('multiply function', () => {

    it('should be a function', () => {
      expect(typeof multiply).to.equal('function');
    })

    it('should return product', () => {
      expect().to.equal();
    })
  })

  describe('replaceLetters', () => {
    
    it('should be a function', () => {
      expect(typeof replaceLetters).to.equal('function');
    })

    it('should return a string', () => {
      expect().to.equal('string');
    })

    it(`should replace all e's with p's`, () => {
      let str = 'etpeqtfeijelnme';
      expect(replacceLetters(str)).to.equal();
    })
  })
})