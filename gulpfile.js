const gulp = require("gulp");

gulp.task("copy",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

gulp.task("images",function(){
    return gulp.src("img/*.{jpg,png,gif}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");
const sass = require("gulp-sass");
gulp.task("sass",function(){
    return gulp.src("HPhome.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("HPhome.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("sass1",function(){
    return gulp.src("commodity.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("commodity.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("sass2",function(){
    return gulp.src("register.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/json"))
    .pipe(connect.reload());
})

gulp.task("watch",function(){
    gulp.watch("*.html",["copy"]);
    gulp.watch("img/*.{jpg,png,gif}",["images"]);
    gulp.watch("HPhome.scss",["sass"])
    gulp.watch("commodity.scss",["sass1"])
    gulp.watch("register.scss",["sass2"])
    gulp.watch(["*.js","!gulpfile.js"],["scripts"])
    gulp.watch(["*.json","!package.json"],["data"])
})

const connect = require("gulp-connect");

gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})

gulp.task("default",["watch","server"]);