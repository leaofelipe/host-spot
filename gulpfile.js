'use strict'

let gulp = require('gulp')
let webserver = require('gulp-webserver')

gulp.task('webserver', () => {
  gulp.src('src')
  .pipe(webserver({
    directoryListing: false,
    open: false
  }))
})

gulp.task('default', ['webserver'])
