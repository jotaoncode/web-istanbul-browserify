var fs = require('fs');
var browserify = require('browserify');

browserify("./src/index.js")
.bundle()
.pipe(fs.createWriteStream("bundle.js"));
