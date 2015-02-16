var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync  = require('browser-sync');

gulp.task("jekyll:dev", shell.task("jekyll build"));

gulp.task("jekyll-rebuild", ["jekyll:dev"], function () {
  browserSync.reload();
});