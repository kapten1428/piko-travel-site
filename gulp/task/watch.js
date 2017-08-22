var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();


gulp.task("watch",function(){
	
	browserSync.init({
		server:{
			baseDir : "app"
		}
	})

	watch('./app/index.html',function(){
		browserSync.reload();
	});

	watch('./app/assets/css/**/*.css',function(){
		gulp.start("cssInject");
	});
});

gulp.task("cssInject",['styles'],function(){
	return gulp.src('./app/assets/css/**/*.css')
			.pipe(browserSync.stream())
});