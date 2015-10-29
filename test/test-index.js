var assert = require('power-assert'),
    should = require('should'),
    m = require('../src/index.js');


describe('root module', function () {
  it('should welcome users with `Hello World`', function () {
    assert.ok(m.index('blah') === 'web');
  });
});
