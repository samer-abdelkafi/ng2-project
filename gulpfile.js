var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var runSequence = require('run-sequence');
var gulpTypings = require("gulp-typings");


gulp.task('clean', function () {
    return del('dist')
});


// TYPINGS
gulp.task("installTypings", function () {
    var stream = gulp.src(["./client/typings.json", "./server/typings.json"])
        .pipe(gulpTypings());
    return stream;
});

gulp.task("deleteDupTypings", function () {
    return del(["./client/typings/main.d.ts",
        "./client/typings/main",
        "./server/typings/browser.d.ts",
        "./server/typings/browser"]);
});


// SERVER
gulp.task('buildServer', function () {
    var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});


// CLIENT

/*
 jsNPMDependencies, sometimes order matters here! so becareful!
 */
var jsNPMDependencies = [
    'material-design-lite/dist/material.min.js',
    'es6-shim/es6-shim.min.js',
    'zone.js/dist/zone.js',
    'reflect-metadata/Reflect.js',
    'systemjs/dist/system.src.js',
    'rxjs/**/*.js',
    '@angular/**/*.js',
    'angular2-mdl/**/*.js'
];


gulp.task('buildIndex', function () {
    var mappedPaths = jsNPMDependencies.map(function (file) {
        return path.resolve('node_modules', file)
    });

    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
        .pipe(gulp.dest('dist/libs'));

    //Let's copy html and js to dist
    var copyIndex = gulp.src(['client/**/*.html', 'client/**/*.js'])
        .pipe(gulp.dest('dist'));

    var copyAsserts = gulp.src('client/assets/**/*')
        .pipe(gulp.dest('dist/assets'));

    return [copyJsNPMDependencies, copyIndex, copyAsserts];
});

gulp.task('buildClient', function () {
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

// WATCH
gulp.task('watch', ['buildServer'], function () {
    gulp.watch('server/*.ts', ['buildServer']);
    gulp.watch('client/**/*.ts', ['buildClient']);
});

// bundle
gulp.task('bundle', function () {
    var path = require('path');
    var Builder = require('systemjs-builder');
    var builder = new Builder('./dist', './dist/app/systemjs.config.js');
 
    builder
        .buildStatic('./dist/app/main.js', './dist/libs/bundle.js')
        .then(function() {
          console.log('Build complete');
    })
    .catch(function(err) {
          console.log('Build error');
          console.log(err);
    });

});



// BUILD

gulp.task('build', function (callback) {
    runSequence('clean', 'installTypings', 'deleteDupTypings', 'buildServer', 'buildIndex', 'buildClient', callback);
});

gulp.task('default', ['build']);