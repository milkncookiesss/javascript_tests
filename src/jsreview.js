function sum() {
  var args = arguments.slice();
  var sum = 0;
  args.forEach((num) => {
    sum += num;
  });
  return sum;
}

module.exports = {sum};