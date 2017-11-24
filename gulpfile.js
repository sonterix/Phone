var gulp = require('gulp'), // подключение gulp 
    sass = require('gulp-sass'); // подключение sass пакета

gulp.task('sass', function(){ // создание таска sass
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // преобразование sass в css
    .pipe(gulp.dest('css')) // помещаем результат в папку css
});

gulp.task('watch', function(){
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']) // наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);