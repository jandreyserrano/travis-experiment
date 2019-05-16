"use strict";

var _appCompiled = _interopRequireDefault(require("./app-compiled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const assert = require('assert');
var assert = require('chai').assert;

var expect = require('chai').expect;

var should = require('chai').should(); // const Operations = require('./app-compiled');


console.info(_appCompiled["default"]);
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
describe('Mathematical operations', function () {
  var operation = new _appCompiled["default"](10, 5);
  describe('Basic operation: sum with assert', function () {
    it('Sum of 2 numbers equals 15', function () {
      var sum = operation.sum.value;
      assert.equal(sum, 15);
    });
    it('The sum of 10 + 5 equals 15 ', function () {
      var sum = operation.sum.text;
      assert.equal(sum, 'La suma de 10 + 5 = 15');
    });
    it('The result is a string', function () {
      var sum = operation.sum.text;
      assert.typeOf(sum, 'string');
    });
    it('The result is a number', function () {
      var sum = operation.sum.value;
      assert.typeOf(sum, 'number');
    });
  });
  describe('Basic operation: subtraction with expect', function () {
    it('Subtraction of 2 numbers equals 5', function () {
      var res = operation.subtraction.value;
      expect(res).to.equal(5);
    });
    it('The subtraction of 10 - 5 equals 5 ', function () {
      var res = operation.subtraction.text;
      expect(res).to.equal('La resta de 10 - 5 = 5');
    });
    it('The result is a string', function () {
      var res = operation.subtraction.text;
      expect(res).to.be.a('string');
    });
    it('The result is a number', function () {
      var res = operation.subtraction.value;
      expect(res).to.be.a('number');
    });
  });
  describe('Basic operation: area of a triangle with should', function () {
    it('Area of triangle with base 10 x height 5 equal 25', function () {
      var area = operation.area.value;
      area.should.equal(25);
    });
    it('Area of triangle equals 25 ', function () {
      var area = operation.area.text;
      area.should.equal('El área del triángulo es 25');
    });
    it('The result is a string', function () {
      var area = operation.area.text;
      area.should.be.a('string');
    });
    it('The result is a number', function () {
      var area = operation.area.value;
      area.should.be.a('number');
    });
  });
});
