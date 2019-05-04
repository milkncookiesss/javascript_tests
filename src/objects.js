//write your code here, >>FOLLOW THE INSTRUCTIONS<<.

//create an object variable called cat
var cat = {};

//add a key called name and give it a string value
cat.name = "felix";

//add a second key/value pair of anything to cat
cat.speak = "meow";

//create a function called addKeyValues that takes in an array and returns an object whos keys are the array's index and the object values are the array's element at that said index
function addKeyValues(x) {
  var obj = {};
  for (var i = 0; i < x.length; i++) {
    obj[i] = x[i];
  }
  return obj;
};

//create a function called returnString that takes in an object and returns a string of the concatenated values seperated by spaces
function returnString(x) {
  var str = "";
  for(var prop in x) {
    str += x[prop] + " ";
  }
  str = str.slice(0, -1)
  return str;
};



























/*
----------------------------------------------------------------------------------------------------------------------------------------------------
*/ 



module.exports = {
  cat: cat,
  addKeyValues: addKeyValues,
  returnString: returnString
}