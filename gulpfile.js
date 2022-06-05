// Gulpを初期化する
const { src, dest, series } = require('gulp')

// Gulpプラグインの読み込み
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require("gulp-sass-glob")

// Sassのコンパイル処理
const sassCompile = function(){
    return src('styles/style.scss')
      .pipe(sassGlob())
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(dest('styles'))
}

// タスクを実行する
exports.default = series(sassCompile)
