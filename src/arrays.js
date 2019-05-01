//Write code here, Do NOT change variable names.
var arr;
//create an array named arr with 5 elements

//add a string into your array

//create a function called "first" that returns the first element of an array

//create a function called "last" that returns the last element of an array
var last;


//fill in this function that accepts a parameter that is an array and returns a new array of all the odd numbers from the parameter
function findOddNums() {};

//fill in this function that takes in an array and returns the sum of all the elements
function findSum(x) {
  var sum = 0;
  for (var i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum
};

























module.exports = {
  arr: arr,
  first: first,
  last: last,
  findOddNums: findOddNums,
  findSum: findSum
  };