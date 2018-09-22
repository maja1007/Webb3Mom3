'use strict';
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

/*

--TOP LEVEL FUNCTIONS --
gulp.task - Define task
gult.src - Point to files to use
gulp.desc - Points to folder to output
gulp.watch - Watch files and folders for changes
*/

//Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

//Copy all Html files
gulp.task('copyHtml', function(){
   gulp.src('src/*.html')
   .pipe(gulp.dest('pub'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('pub/images'))
);

// Minify JS
gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('pub/js'));
});


//Compile Scss
gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('sassstyle.css'))
    .pipe(gulp.dest('src/css'));
});

//Scripts
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('pub/js'));
});


//Compile Css
gulp.task('css', function(){
    gulp.src('src/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
    .pipe(gulp.dest('pub/css'));
});

//Compile Copy 
gulp.task('run',['sass', 'message', 'copyHtml', 'imageMin', 'scripts', 'css']);

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/images/*', ['imageMin']);
});

gulp.task('default', ['run', 'watch']);