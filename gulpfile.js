var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');

gulp.task('scss', async function() {
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', async function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });
});

gulp.task('code', async function() {
  return gulp.src('src/*.html')
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', async function() {
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('src/*.html', gulp.parallel('code'));
});

gulp.task('clean', async function() {
  return del.sync('dist');
});

gulp.task('prebuild', async function() {
  var cssBuild = gulp.src('src/css/main.css')
  .pipe(gulp.dest('dist/css'));

  var jsBuild = gulp.src('src/scripts/**/*')
  .pipe(gulp.dest('dist/scripts'));

  var fontsBuild = gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));

  var imgBuild = gulp.src('src/media/**/*')
  .pipe(gulp.dest('dist/media'));

  var buildHtml = gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel('scss', 'prebuild', 'clean'));
gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch'));