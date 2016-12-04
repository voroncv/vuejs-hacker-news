'use strict';

var gulp = require('gulp'); 
var uglify = require('gulp-uglify'); 
var sass = require('gulp-sass');

gulp.task('scripts', function() { 
  gulp.src(['js/*.js']) 
    .pipe(uglify()) 
    .pipe(gulp.dest('app/assets/js'));
});

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'));
});


gulp.task('default', function() { 
  gulp.run('scripts'); 
  gulp.watch('js/**', function(event) { 
    gulp.run('scripts'); 
  });
  gulp.run('sass');
  gulp.watch('sass/*.scss', function(event) { 
    gulp.run('sass');
  }); 
});