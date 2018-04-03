var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'), // error will not stop watch
    connect = require('gulp-connect'), // livereload
    prefix = require('gulp-autoprefixer'), // prefix css
    concat = require('gulp-concat');




gulp.task('sass', function(){

  SASSTask('sass/index.styles.scss', 'assets/css')
  SASSTask('sass/login.styles.scss', 'assets/css')
  SASSTask('sass/admin.styles.scss', 'assets/css')
});

function SASSTask(src, dest) {
  gulp.src(src)
      .pipe(plumber())
      .pipe(sass({outputStyle: 'compressed'})) 
      .pipe(prefix('last 2 versions')) 
      .pipe(gulp.dest(dest));
}






gulp.task('js', function(){

  JSTask('app/app.index.js', 'app/**/*.index.js', 'index.min.js', 'assets/js', 'node_modules/angular-route/angular-route.min.js')
  JSTask('app/app.admin.js', 'app/**/*.admin.js', 'admin.min.js', 'assets/js', 'node_modules/angular-route/angular-route.min.js')
  JSTask('app/app.login.js', 'app/**/*.login.js', 'login.min.js', 'assets/js', ' ')
});

function JSTask(angModule ,src, name, dest, route) {
  gulp.src(['node_modules/angular/angular.min.js',
            route,
            angModule,
            src]) 
   .pipe(plumber())
   .pipe(concat(name))
//   .pipe(uglify())
   .pipe(gulp.dest(dest));
}




gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('app/**/*.js', ['js']);
});

 