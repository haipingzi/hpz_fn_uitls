const expect = require('expect.js');
const clone = require('../src/index.js').clone;
console.log(clone);

describe('深拷贝', () => {
  describe('不同的参数', () => {
    it('正确的测试用例', () => {
      expect(clone('123')).to.equal('123');

      const arr = [1, 2, 3];
      const cloneArr = clone(arr);
      expect(cloneArr).to.eql(arr);
      expect(cloneArr).not.to.equal(arr);

      const obj = { a: { b: 213 } };
      const cloneObj = clone(obj);
      expect(cloneObj).to.eql(obj);
      expect(cloneObj).not.to.equal(obj);
    });

    it('边界值测试用例', () => {
      expect(clone(undefined)).to.equal(undefined);
      expect(clone()).to.equal(undefined);
      expect(clone(null)).to.equal(null);
    });
  });
});
