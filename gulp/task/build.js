var gulp = require('gulp'),
usemin = require('gulp-usemin'),
imagemin = require('gulp-imagemin');
del = require('del'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
smushit = require('gulp-smushit'),
browserSync = require('browser-sync').create();;

gulp.task('deleteFolder',['icons'],function(){
	return del('./docs');
});

gulp.task('previewDist',function(){
	browserSync.init({
		notify: false,
		server:{
			baseDir : "docs"
		}
	})
});

gulp.task('copyGeneralFiles',['deleteFolder'],function(){
	var pathToCopy = [
		'./app/**/*',
		'!./app/assets/images/**/*',
		'!./app/assets/css/**/*',
		'!./app/assets/scripts/**/*',
		'!./app/temp',
		'!./app/temp/**/*'
	]

	return gulp.src(pathToCopy)
			.pipe(gulp.dest('./docs'));
});

gulp.task('imageOptimize',['deleteFolder'],function(){
	return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons','!./app/assets/images/icon/**/*'])
	.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger',['deleteFolder'],function(){
	gulp.start("usemin");
});

gulp.task('usemin',['styles','scripts'],function(){
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css:[function() {return rev()}, function() {return cssnano()}],
		js:[function() {return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});

gulp.task('build',['deleteFolder','copyGeneralFiles','imageOptimize','useminTrigger']);