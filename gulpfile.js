let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let plumber = require('gulp-plumber');
let progeny = require('gulp-progeny');
let sourcemaps = require('gulp-sourcemaps');
let packageImporter = require('node-sass-package-importer');
let changed      = require( 'gulp-changed' );
let imagemin     = require( 'gulp-imagemin' );
let svgmin       = require( 'gulp-svgmin' );
let concat       = require( 'gulp-concat' );
let jshint       = require( 'gulp-jshint' );
let rename       = require( 'gulp-rename' );


//Sass
gulp.task('sass', function(done){
  gulp.src('./assets/styles/style.scss')
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
  return gulp.src('./assets/styles/style.scss')
  .pipe(sass({
    importer: packageImporter({
      extensions: ['.scss', '.css']
    })
  }))
  .pipe(gulp.dest('style.css'));
});

let browserSync  = require( 'browser-sync' );

// imagemin
gulp.task( 'imagemin', function() {
 // svg
 gulp.src( './assets/images/svg/*.+(svg)' )
     .pipe( changed( './assets/images/svg/*' ) )
     .pipe( svgmin() )
     .pipe( gulp.dest( './assets/images/svgmin' ) );
} );

// concat js file(s)
gulp.task( 'js.concat', function() {
  gulp.src( [
      './assets/scripts/opening.js' // 1
  ] )
      .pipe( plumber() )
      .pipe( jshint() ) // 2
      .pipe( jshint.reporter( 'default' ) ) // 2
      .pipe( concat( 'bundle.js' ) ) // 3
      .pipe( gulp.dest( './scripts' ) );
} );

// compress js file(s)
gulp.task( 'js.compress', function() {
  gulp.src( './js/bundle.js' )
      .pipe( plumber() )
      .pipe( rename( 'bundle.min.js' ) ) // 5
      .pipe( gulp.dest( './scripts' ) );
} );

// Browser Sync
gulp.task('bs', function() {
    browserSync({
        notify: false,
        server: { // 1
            baseDir: "./",
            index: ['index.html', 'opening.html', 'opening2.html', 'opening3.html', 'opening4.html'],
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
gulp.task( 'default', [ 'bs', 'sass', 'js.concat', 'js.compress', 'imagemin' ], function() { // 1
  gulp.watch("*.html", ['bs-reload']); // 2
  gulp.watch("./assets/styles/**/*.scss", [ 'sass', 'bs-reload' ]); // 3
  gulp.watch("./assets/scripts/*.js", [ 'js.concat', 'js.compress', 'bs-reload' ]);
  gulp.watch("./assets/images/svg/*.svg", [ 'imagemin', 'bs-reload' ]);
});