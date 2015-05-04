[![Build Status](https://travis-ci.org/webcaetano/gulp-jinx-inject.svg?branch=master)](https://travis-ci.org/webcaetano/gulp-jinx-inject) [![npm version](https://badge.fury.io/js/gulp-jinx-inject.svg)](http://badge.fury.io/js/gulp-jinx-inject)

# [![Imgur](http://i.imgur.com/FHjshUv.png)](https://github.com/webcaetano/jinx)

### Gulp Jinx Inject

This is an GulpJS plugin for inject [Jinx](https://github.com/webcaetano/jinx) .AS packages files

### Installation

```
npm install gulp-jinx-inject
```

### Usage 

```javascript
var jinxInject = require('gulp-jinx-inject');
var tmpMainFile = '.tmp/as/app/flash/main.as';
var pkgs = require('jinx-loader')(tmpMainFile);

return gulp.src(tmpMainFile) // file path to inject
	.pipe(jinxInject(pkgs.as))
	.pipe(gulp.dest(path.dirname(tmpMainFile))); // injected file
```

### Result example
```javascript
// before 

package {

import flash.display.*;

public class main extends Sprite {
public function main() {

	// [[inject:jinx]]

	include 'partials/bar.as';
}}}

// after

package {

import flash.display.*;

public class main extends Sprite {
public function main() {

	include '../../../node_modules/jinx-mempanel/index.as';
 	include '../../../node_modules/jinx.as/jinx.as';

	include 'partials/bar.as';
}}}
```


---------------------------------

The MIT [License](https://raw.githubusercontent.com/webcaetano/gulp-jinx-inject/master/LICENSE.md)
