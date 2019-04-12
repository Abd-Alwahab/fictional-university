var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssmixins = require('postcss-mixins');
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
cssimport = require('postcss-import');


gulp.task('css',function() {

    gulp.src('./css/styles.css')
    .pipe(postcss([ cssimport , cssvars , cssmixins , nested , autoprefixer ]))
    .on('error', function(er) {
        console.log(er.toString());
        
        this.emit('end');
    })
    .pipe(gulp.dest('./temp/style/'));
     
    
    });
    
    