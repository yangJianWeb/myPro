/**
 * Created by cyril on 2017/10/22.
 */
var gulp  = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload')

gulp.task('testTask', function(){
    console.log('Hello World nice to meet u.!')
});

gulp.task('minify-js', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-html', function(){
    gulp.src('*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'));
});

gulp.task('jsLint', function(){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
});

gulp.task('minify-css', function(){
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('css/*.css', ['css'])
});








