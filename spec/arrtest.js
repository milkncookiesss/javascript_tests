const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;
//have files required from src here


const {arr, first, last, findOddNums, findSum, includesInArr} = require('../src/arrays.js');

// Array Tests
describe('Array', () => {
  
  it('should be an array', () => {
    expect(Array.isArray(arr)).to.equal(true);
  })
  
  it('should have length of 6', () => {
    expect(arr.length).to.equal(6);
  })
  
  it('should contain a string', () => {
    let string = arr[arr.length - 1];
    expect(typeof string).to.equal('string');
  })
  
  describe('Array First Function', () => {
    
    it('should exist', () => {
      expect(typeof first).to.equal('function');
    })
    
    it('should return the first element of an array', () => {
      let newArr = [];
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
      let newArr = [];
      newArr.push('hello');
      newArr.push('world');
      newArr.push(15);
      expect(last(newArr)).to.equal(15);
    })
  })
  
  describe('Array function practice', () => {
    
    describe('FindOddNums', () => {
      it('should be a function', () => {
        expect(typeof findOddNums).to.equal('function');
      })
      it('should return array of odd numbers', () => {
        let newArr = [1,[2],{a: 15},4,"5",6,7,]
        expect(findOddNums(newArr)).to.deep.equal([1,7])
      })
    })
    
    describe('findSum', () => {
      it('should return the sum of an array', () => {
        let newArr = [1,2,3,4,5,6];
        expect(findSum(newArr)).to.equal(21);
      })
      
      it('should return the sum of the array that contains nested arrays', () => {
        let newArr = [1,2,3,[4,5,6],7,8,9];
        expect(findSum(newArr)).to.equal(45);
      })
    })

    describe('includesInArr', () => {
      it('should be a function', () => {
        expect(typeof includesInArr).to.equal('function');
      })

      it('should return a boolean', () => {
        let bool = includesInArr();
        expect(typeof bool).to.equal('boolean');
      })
      
      it('should return true if target is in array', () => {
        let arr = ['there', 'once', 'was', 'omar', 'who', 'tried', 'to', 'dance', 2, 'the', 'wazz'];
        let target = 'omar';
        expect(includesInArr(arr, target)).to.equal(true);
      })

      it('should return false when target is not included in array', () => {
        let arr = ['there', 'once', 'was', 'omar', 'who', 'tried', 'to', 'dance', 2, 'the', 'wazz'];
        let target = 'dank';
        expect(includesInArr(arr, target)).to.equal(false);
      })
    })
  })
})



