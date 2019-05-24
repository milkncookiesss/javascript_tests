# Basic Javascript Exercise

This exercise repository will test your understanding of basic javascript

## Installation

User your terminal to install packages and run tests.

1. install packages
```bash
npm install
```
2. Fill in the code in SRC folder (Follow instructions)

3. Run tests using terminal
  test-arr runs tests for arrays.js
  test-obj runs tests for objects.js
  test-func runs tests for functions.js

example:
```bash
npm run test-arr
```

## Terminal
If you see something on your terminal like this:
```bash
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! javascript_tests@1.0.0 test-func: `mocha --bail --reporter nyan spec/functest.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the javascript_tests@1.0.0 test-func script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
```

Do not worry about it

Just focus on the what the Test writes:
```bash
 1   -_-_,------,
 1   -_-_|   /\_/\
 0   -_-^|__( x .x)
     -_-  ""  ""

  1 passing (21ms)
  1 failing

  1) functional programming
       sum function
         should return sum of two numbers:
     AssertionError: expected undefined to equal 3
      at Context.it (spec\functest.js:16:28)
```


More exercises will be written in the future..