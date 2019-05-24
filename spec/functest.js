const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;

const {sum, mult, replaceLetters} = require('../src/functions.js');

describe('functional programming', () => {

  describe('sum function', () => {

    it('should be a function', () => {
      expect(typeof sum).to.equal('function');
    })

    it('should return sum of two numbers', () => {
      expect(sum(1, 2)).to.equal(3);
    })

    it('should return the sum of all the arguments', () => {
      expect(sum(1, 100, 25, 34, 99, 1.5, 11.25, 420)).to.equal(691.75);
    })

    it('should return 0 if no arguments are given', () => {
      expect(sum()).to.equal(0);
    })
  })

  describe('mult function', () => {

    it('should be a function', () => {
      expect(typeof mult).to.equal('function');
    })

    it('should return 1 if no arguments are given', () => {
      expect(mult()).to.equal(1);
    })

    it('should return the product of all the arguments', () => {
      expect(mult(25, 2, 3, 15, 9, 6)).to.equal(121500);
    })
  })

  describe('replaceLetters', () => {
    
    it('should be a function', () => {
      expect(typeof replaceLetters).to.equal('function');
    })

    it('should return a string', () => {
      let result = replaceLetters();
      expect(typeof result).to.equal('string');
    })

    it('should return an empty string if there are no arguments', () => {
      let result = replaceLetters();
      expect(result).to.equal('');
    })

    it(`should replace all e's with p's`, () => {
      let str = 'etpeqtfeijelnme';
      expect(replaceLetters(str)).to.equal('ptppqtfpijplnmp');
    })

    it('should switch e with p and E with P', () => {
      let str = 'Everyone eats Eggs evEry evEning evEntually';
      expect(replaceLetters(str)).to.equal('Pvpryonp pats Pggs pvPry pvPning pvPntually');
    })

    it("should return original string if there are no e's", () => {
      let str = 'you know what is up';
      expect(replaceLetters(str)).to.equal(str);
    })
  })
})