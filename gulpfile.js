const { src, dest, watch } =require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    src("src/scss/**/*.scss") //identifica archivo de sass
        .pipe(plumber()) //
        .pipe(sass()) //compila
        .pipe(dest("build/css"))  //Almacena en el disco duro

    done();  // Callback que avisa a gulp cuando llego al final
}

function dev(done){
    watch("src/scss/**/*.scss", css)
}

exports.css = css;
exports.dev = dev;