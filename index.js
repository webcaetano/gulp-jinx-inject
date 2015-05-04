'use strict';
var through = require('through2');
var path = require('path');
var gutil = require('gulp-util');

var utils = {
	extend:function(destObj) {
		for (var i = 1; i < arguments.length; i++) for (var key in arguments[i]) destObj[key] = arguments[i][key];
		return destObj;
	}
};

module.exports = function (asFiles) {
	if (!asFiles) throw new gutil.PluginError('gulp-jinx-inject', '`asFiles` required');

	return through.obj(function (file, enc, callback) {
		if (file.isNull()) return callback(null, file);
		if (file.isStream()) return callback(new gutil.PluginError('gulp-jinx-inject', 'Streaming not supported'));

		var fileContent = String(file.contents);
		if(fileContent.indexOf('// [[inject:jinx]]')!=-1 && asFiles.length){
			fileContent = fileContent.replace('// [[inject:jinx]]',"include '"+asFiles.join("';\n include '")+"';\n");
		}

		file.contents = new Buffer(fileContent);
		callback(null,file);
	});
};
