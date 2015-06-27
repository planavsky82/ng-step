module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "build/demo/vendor.css": "demo/vendor.less"
                }
            }
        },
        watch: {
            files: ["ng-step/css/**.less","ng-step/**","demo/**"],
            tasks: ["build"],
            options: {
              //livereload: true
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: [
                            'ng-step/**',
                            'demo/**',
                            'bower_components/**',
                            '!ng-step/less/*.less',
                            '!ng-step/less',
                            '!demo/*.less',
                            '!bower_components/**/less/*.less',
                            '!bower_components/**/less'
                        ],
                        dest: 'build/'
                    }
                ]
            }
        },
        clean: {
            build: {
                src: [ 'build' ]
            }
        },
        open : {
            dev : {
                path: 'http://127.0.0.1:8080/demo'
                //app: 'Google Chrome'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'build'
                    //hostname: '*'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        angularFileLoader: {
            options: {
                scripts: [
                    'demo/app.js',
                    'ng-step/js/*.js',
                    '!ng-step/js/*.test.js'
                ]

            },
            target: {
                src: ['build/demo/index.html']
            }
        },
        jshint: {
            all: ['Gruntfile.js', '!ng-step/js/*.js', '!ng-step/js/*.test.js']
        }
        // server will run at http://localhost:8080
        // source: http://www.sitepoint.com/writing-awesome-build-script-grunt/
        // other tasks to look into: jshint, htmlhint, compile
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-angular-file-loader');

    grunt.registerTask('default', ['karma','build','connect','open','watch']);
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['jshint', 'clean', 'copy', 'less','angularFileLoader']
    );
};