'use strict';

var greet = require (__dirname + '/../greet');

var expect = require('chai').expect;

describe('test the greet function', function(){
  it('should greet "hello test"', function(){
    expect(greet('testing name')).to.equal('hello, testing name');
  });
});
