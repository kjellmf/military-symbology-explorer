var gulp = require('gulp');
var browserSync = require('browser-sync');

var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    del = require('del');


gulp.task('copy-combine-js-css', function () {
    var assets = useref.assets();

    return gulp.src('index.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-combine-minify-jscss', function () {
    var assets = useref.assets();

    return gulp.src('index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify({mangle: false})))// If we omit mangle, angular will fail
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-html', function () {
    gulp.src(['app/**/*.html'])
        .pipe(gulp.dest('dist/app/'));
    gulp.src(['assets/img/**/*'])
        .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('copy-assets', function () {
    gulp.src(['assets/img/**/*'])
        .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('copy-svg-to-dist', function () {
    gulp.src(['../joint-military-symbology-xml/svg/**/*.*'])
        .pipe(gulp.dest('dist/svg/'));
});

gulp.task('copy-svg-to-main', function () {
    gulp.src(['../joint-military-symbology-xml/svg/**/*.*'])
        .pipe(gulp.dest('svg'));
});

gulp.task('clean', function (cb) {
    del(['dist/**/*', '!dist/svg/**'], cb);
});

gulp.task('clean-everything', function (cb) {
     del(['dist/**/*'], cb);
});

gulp.task('copy', ['copy-html', 'copy-assets']);
gulp.task('build', ['copy', 'copy-combine-js-css']);
gulp.task('build-minify', ['copy', 'copy-combine-minify-jscss']);

// Static server
gulp.task('browser-sync', function () {
    var files = [
        '*.html',
        'app/components/**',
        'assets/css/**',
        'app/*.js'
    ];
    browserSync(files, {
        server: {
            baseDir: "./"
        }
    });
});

