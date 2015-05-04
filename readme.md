# gulp-jinx-inject [![Build Status](https://travis-ci.org/webcaetano/gulp-jinx-inject.svg?branch=master)](https://travis-ci.org/webcaetano/gulp-jinx-inject)

> My incredible gulp plugin


## Install

```
$ npm install --save-dev gulp-jinx-inject
```


## Usage

```js
var gulp = require('gulp');
var jinxInject = require('gulp-jinx-inject');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(jinxInject())
		.pipe(gulp.dest('dist'));
});
```


## API

### jinxInject(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [](https://github.com/webcaetano)
