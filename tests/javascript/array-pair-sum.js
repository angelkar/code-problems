var expect       = require('chai').expect;
var arrayPairSum = require('../../solutions/javascript/array-pair-sum');

describe('Array Pair Sum', function () {
  it('should find pairs that equal the expected sum', function () {
    expect(arrayPairSum(10, [3, 4, 5, 6, 7])).to.eql([[4, 6], [3, 7]]);
  });

  it('should not output duplicate results', function () {
    expect(arrayPairSum(8, [3, 4, 5, 4, 4])).to.eql([[3, 5], [4, 4]]);
  });

  it('should only allow distinct elements', function () {
    expect(arrayPairSum(4, [1, 1, 2, 3, 4])).to.eql([[1, 3]]);
  });
});
