const { watch } = require('gulp');
const browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
function serve() {

    browserSync.init({
        server: "."
    });

    // gulp.watch("app/scss/*.scss", ['sass']);
    watch("*.html").on('change', browserSync.reload);
}


exports.default = serve