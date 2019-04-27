function sum() {
  var args = Array.prototype.slice.call(arguments, 1);
  var sum = 0;
  args.forEach((num) => {
    sum += num;
  });
  return sum;
}

module.exports = sum;