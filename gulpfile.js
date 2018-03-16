var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso");

// --- Task for styles 
gulp.task("css", function () {
    gulp.src("src/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest("assets/css"));
});

// --- Watch tasks
gulp.task("watch", function () {
    gulp.watch("src/sass/**/*.scss", ["css"]);
});

// --- Aliases
gulp.task("default", ["css"]);
gulp.task("work", ["default", "watch"]);