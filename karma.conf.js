module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'demo/app.js',
            'ng-step/js/*.js',
            'ng-step/js/*.test.js',
            'ng-step/views/*.html',
            'mock-data/*.json'
        ],

        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        reporters: ['progress', 'html', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: 'ERROR',

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it captures browsers, run tests and exit
        singleRun: true,

        preprocessors: {
            'ng-step/views/*.html': ['ng-html2js'],
            'mock-data/*.json': ['json2js'],
            '**/*.js': ['coverage']
        },

        htmlReporter: {
            outputFile: 'build/tests/test_report.html'
        },

        coverageReporter: { type : 'html', dir : 'build/tests/coverage/', file: 'coverage.xml' }

    });
};