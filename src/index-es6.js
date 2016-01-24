import './imported.js'

const button = document.getElementById('button')

const alertAsyncMessage = function() {
  var func = (x, y) => { return x + y; };
  const message = 'pepe';
  alert(message)
  alert(func(2, 3));
}

const buttonListener = function () {
  console.log(`
    asset references like this one:
      images/gulp.png
    get updated in js too!`)

  button.addEventListener('click', alertAsyncMessage)
}


module.exports = button;
