var gulp = require('gulp');
var ts = require('gulp-typescript');
var webserver = require('gulp-webserver');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('http', function() {
  gulp.src('public')
  .pipe(webserver({
    livereload: true,
    open: true
  }));
})

gulp.task('typescript', function() {
  return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest('public'));
});

var watcher = gulp.watch('src/*', ['typescript']);

gulp.task('default', ['typescript', 'http']);