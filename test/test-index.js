var assert = require('power-assert'),
    should = require('should'),
    m = require('../src/index.js');


describe('Sample of coverage', function () {
  it('Should make coverage on Index function only', function () {
    assert.ok(m.index() === 'web');
  });
});
