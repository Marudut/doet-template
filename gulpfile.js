var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    // content
    gulp.src('dev/sass/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
      	browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('dev/css'));

});

gulp.task('default', function() {
    // content
    gulp.watch('dev/sass/*.scss', ['sass']);
});