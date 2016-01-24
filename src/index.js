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
