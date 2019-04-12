var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


  


gulp.task('watch', function() {

    browserSync.init({
      notify: false, 
      server : {
          baseDir: "./",
          index: "index.html"  
         },
       rewriteRules: [ { match: "connect-src 'self'", replace: "connect-src ws: 'self'" } ]
    });


   watch('./index.html',function() {

   browserSync.reload();        

   });

   watch('./css/*.css', function() {

    
      gulp.start('cssInject');


   });
 

});



gulp.task('cssInject',['css'], function() {

   gulp.src("./temp/style/styles.css").pipe(browserSync.stream());

});

