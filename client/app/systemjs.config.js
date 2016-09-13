(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':      'app',
        
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        
        'rxjs':     'libs/rxjs',
        '@angular': 'libs/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':      { main: './main.js',  defaultExtension: 'js' },
        'rxjs':     { defaultExtension: 'js' },
        'angular2-in-memory-web-api': {defaultExtension: 'js'}
    };


    var config = {
        paths: {
          // paths serve as alias
          'npm:': 'libs/'
        },
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    //if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
