var gulp = require('gulp');
var del = require('del');

gulp.task('copy-html', function () {
    gulp.src(['app/**/*.html'])
        .pipe(gulp.dest('dist/app/'));
    gulp.src(['assets/img/**/*'])
        .pipe(gulp.dest('dist/assets/img/'));
});


gulp.task('copy-svg-to-dist', function () {
    gulp.src(['../joint-military-symbology-xml/svg/**/*.*'])
        .pipe(gulp.dest('dist/static/svg/'));
});

gulp.task('copy-svg-to-main', function () {
    gulp.src(['../joint-military-symbology-xml/svg/**/*.*'])
        .pipe(gulp.dest('static/svg'));
});

gulp.task('clean', function (cb) {
    del(['dist/**/*', '!dist/static/svg/**'], cb);
});

gulp.task('clean-everything', function (cb) {
    del(['dist/**/*'], cb);
});
