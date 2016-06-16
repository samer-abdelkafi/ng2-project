var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
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
    '@angular/**/*.js'
];


gulp.task('buildIndex', function () {
    var mappedPaths = jsNPMDependencies.map(function (file) {
        return path.resolve('node_modules', file)
    });

    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
        .pipe(gulp.dest('dist/libs'));

    //Let's copy our index into dist
    var copyIndex = gulp.src(['client/index.html', 'client/**/*.js'])
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

// BUILD

gulp.task('build', function (callback) {
    runSequence('clean', 'installTypings', 'deleteDupTypings', 'buildServer', 'buildIndex', 'buildClient', callback);
});

gulp.task('default', ['build']);