module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            //{pattern: 'node_modules/systemjs/dist/system-polyfills.js', watched: true, included: true},            
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', watched: true, included: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', watched: true, included: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', watched: true, included: true},
            {pattern: 'node_modules/angular2/bundles/angular2.js', watched: true, included: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', watched: true, included: true},
            {pattern: 'node_modules/angular2/bundles/http.dev.js', watched: true, included: true},
            {pattern: 'node_modules/angular2/bundles/router.js', watched: true, included: true},
            {pattern: './karma-system-boot.js', watched: true, included: true},
            {pattern: 'public/app/test/**/*Spec.js', watched: true, included: false},
            {pattern: 'public/app/**/*.js', watched: true, included: false}
            
            //"./karma-system-boot.js",
            //"public/app/test/**/*Spec.js"
        ],
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/public/app/"
        },
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine",
            "karma-ng-html2js-preprocessor"
        ]
    });
};
