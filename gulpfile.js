
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    return gulp.src('./specs/*')
        .pipe(jasmine());
});

gulp.task('tests', function ()
{

})