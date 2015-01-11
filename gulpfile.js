var gulp = require('gulp');
var browserSync = require('browser-sync');

var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    del = require('del');


gulp.task('copyCombineJsCss', function () {
    var assets = useref.assets();

    return gulp.src('index.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('copyCombineMinifyJsCss', function () {
    var assets = useref.assets();

    return gulp.src('index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify({mangle: false})))// If we omit mangle, angular will fail
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', function () {
    gulp.src(['app/**/*.html'])
        .pipe(gulp.dest('dist/app/'));
    gulp.src(['assets/img/**/*'])
        .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('copyAssets', function () {
    gulp.src(['assets/img/**/*'])
        .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('copySvg', function () {
    gulp.src(['../joint-military-symbology-xml/svg/**/*.svg'])
        .pipe(gulp.dest('dist/svg/'));
});

gulp.task('clean', function (cb) {
    del(['dist/**/*', '!dist/svg/**'], cb);
});

gulp.task('copy', ['copyHtml', 'copyAssets']);
gulp.task('build', ['copy', 'copyCombineJsCss']);
gulp.task('buildMinify', ['copy', 'copyCombineMinifyJsCss']);

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

