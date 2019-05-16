"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Operations =
/*#__PURE__*/
function () {
  function Operations(a, b) {
    _classCallCheck(this, Operations);

    this.a = a;
    this.b = b;
    this.c = 0;
  }

  _createClass(Operations, [{
    key: "calcSum",
    value: function calcSum() {
      this.c = this.a + this.b;
      return {
        value: this.c,
        text: "La suma de ".concat(this.a, " + ").concat(this.b, " = ").concat(this.c)
      };
    }
  }, {
    key: "calcSubtraction",
    value: function calcSubtraction() {
      this.c = this.a - this.b;
      return {
        value: this.c,
        text: "La resta de ".concat(this.a, " - ").concat(this.b, " = ").concat(this.c)
      };
    }
  }, {
    key: "calcArea",
    value: function calcArea() {
      this.c = this.a * this.b / 2;
      return {
        value: this.c,
        text: "El \xE1rea del tri\xE1ngulo es ".concat(this.c)
      };
    }
  }, {
    key: "sum",
    get: function get() {
      return this.calcSum();
    }
  }, {
    key: "subtraction",
    get: function get() {
      return this.calcSubtraction();
    }
  }, {
    key: "area",
    get: function get() {
      return this.calcArea();
    }
  }]);

  return Operations;
}(); // module.exports = Operations;


var _default = Operations; // Gracias a babel

exports["default"] = _default;
