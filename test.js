'use strict';
var	gulp = require('gulp');
var	path = require('path');
var	fs = require('fs');
var through = require('through2');
var expect = require('chai').expect;
var jinxInject = require('./');
var jinxLoader = require('jinx-loader');

var options = {
	tmp:'.tmp',
	src:'test',
	tmpFolder:'as'
}

var mainFile = 'app/flash/main.as';
var tmpFolderPath = path.join(options.tmp,options.tmpFolder);
var pkgs = jinxLoader(path.join(tmpFolderPath,mainFile));

var tmpMainFile = path.join(tmpFolderPath,mainFile);

gulp.task('copy',function(){
	return gulp.src([
		options.src +'/**/*.as',
	])
	.pipe(gulp.dest(tmpFolderPath));
});

gulp.task('inject',['copy'],function(){
	return gulp.src(tmpMainFile)
	.pipe(jinxInject(pkgs.as))
	.pipe(gulp.dest(path.dirname(tmpMainFile)));
});

describe('gulp-jinx-inject', function() {
	it('should inject the .as files on main.as inside .tmp folder',function(done){
		gulp.start('inject',function(){
			var fileContents = String(fs.readFileSync(tmpMainFile));

			var c = 0;
			for(var i in pkgs.as) if(fileContents.indexOf(pkgs.as[i])!=-1) ++c;

			expect(c).to.be.equals(pkgs.as.length);
			expect(fs.readFileSync(tmpMainFile)).to.be.an('object');
			done();
		});
	});
});
