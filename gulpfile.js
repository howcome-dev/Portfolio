let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let plumber = require('gulp-plumber');
let progeny = require('gulp-progeny');
let sourcemaps = require('gulp-sourcemaps');
let packageImporter = require('node-sass-package-importer');

//Sass
gulp.task('sass', function(done){
  gulp.src('assets/styles/style.scss')
  .pipe(plumber())
  .pipe(progeny())
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(sass({
    importer: packageImporter({
      extensions: ['.scss', '.css']
    })
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('././'))
  done();
});

//normalize.css
gulp.task('build:sass', function(){
  return gulp.src('assets/styles/_reset.scss')
  .pipe(sass({
    importer: packageImporter({
      extensions: ['.scss', '.css']
    })
  }))
  .pipe(gulp.dest('style.css'));
});

let browserSync  = require( 'browser-sync' );

// Browser Sync
gulp.task('bs', function() {
    browserSync({
        server: { // 1
            baseDir: "./",
            index: "index.html"
        }
    });
});

// Reload Browser
gulp.task( 'bs-reload', function() {
    browserSync.reload(); // 2
});

//
// Default task
//
gulp.task( 'default', [ 'bs', 'sass' ], function() { // 1
  gulp.watch("./**/*.html", ['bs-reload']); // 2
  gulp.watch("./src/assets/sass/**/*.scss", [ 'sass', 'bs-reload' ]); // 3
});