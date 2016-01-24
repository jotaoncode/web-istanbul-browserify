(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'Pepe';

},{}],2:[function(require,module,exports){
'use strict';

require('./imported.js');

var button = document.getElementById('button');

var alertAsyncMessage = function alertAsyncMessage() {
  var func = function func(x, y) {
    return x + y;
  };
  var message = 'pepe';
  alert(message);
  alert(func(2, 3));
};

var buttonListener = function buttonListener() {
  console.log('\n    asset references like this one:\n      images/gulp.png\n    get updated in js too!');

  button.addEventListener('click', alertAsyncMessage);
};

module.exports = button;

},{"./imported.js":1}],3:[function(require,module,exports){
'use strict';

var anotherIndex = require('./index-es6.js');

function index() {
  return 'web';
}
function anotherIndex() {
  return 'something else';
}

module.exports = {
  index: index,
  anotherIndex: anotherIndex
};

},{"./index-es6.js":2}]},{},[3]);
