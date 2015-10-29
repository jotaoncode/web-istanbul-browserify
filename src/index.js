function index(something) {
  if (something) {
    return 'web';
  } else {
    return 'something else';
  }
}
function anotherIndex() {
  if (true) {
    console.log('blah');
  }else  {
    console.log('bli');
  }
}


module.exports = {
  index: index,
  anotherIndex: anotherIndex
};
