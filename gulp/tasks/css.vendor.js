'use strict';

module.exports = function() {
  $.gulp.task('css.vendor', function() {
    return $.gulp.src($.path.vendor)
      .pipe($.gp.concatCss('vendor.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })
};
