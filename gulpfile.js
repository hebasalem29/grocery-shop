 var gulp=require('gulp'),
pug=require('gulp-pug'),
sass=require('gulp-sass'),
minify=require('gulp-minify'),
watch=require('gulp-watch'),
sorcemaps=require('gulp-sourcemaps'),
autoprefixer=require('gulp-autoprefixer'),
livereload=require('gulp-livereload'),
concat=require('gulp-concat');

gulp.task('html',function(){

return gulp.src('stage/html/*.pug')
.pipe(pug({pretty:true}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());

});


gulp.task('css',function (){
    return gulp.src(['stage/**/*.css' ,'stage/**/*.scss'])
    .pipe(sorcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());

});

gulp.task('js',function(){
    return gulp.src('stage/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('stage/html/**/*.pug',gulp.series('html'));
    gulp.watch(["stage/css/**/*.css","stage/css/**/*.scss"],gulp.series('css'));
    gulp.watch('stage/js/*.js',gulp.series('js'));
})

