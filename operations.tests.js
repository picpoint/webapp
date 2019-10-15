let assert = require('assert');
let mltply = require('./tests/multiply');
let sumnmbr = require('./tests/pluss');
let devAsync = require('./tests/devidAsync');
let divNmbr = require('./tests/div');


// it('function must be multiply two numbers', () => {
//   let expectRes = 25;
//   let resMultiply = mltply.multiply(5, 5);
  
//   if(resMultiply !== expectRes) {
//     throw new Error(`Expected ${expectRes} but got ${resMultiply}`);
//   }
// });


// it('function must add up two number', () => {
//   let expectResSum = 33;
//   let resSumm = sumnmbr.summnumb(11, 22);

//   if(resSumm != expectResSum) {
//     throw new Error(`Expected ${expectResSum} but got ${resSumm}`);
//   }
// });

// it(`func must devide two number`, (done) => {
//   let expectResDevide = 3;
//   devAsync.devideAsync(12, 4, function(result) {
//     if(result !== expectResDevide) {
//       throw new Error(`Expected ${expectResDevide} but got ${result}`);
//     }
//     done();
//   });

// });


it(`function must devide b / a`, () => {
  let expectDiv = 7;
  let resdivNmbr = divNmbr.divisions(3, 15);
  assert.notEqual(expectDiv, resdivNmbr);
});