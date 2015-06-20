module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "build/app/framework/css/framework.css": "app/framework/less/framework.less",
                    "build/app/framework/css/vendor.css": "app/framework/less/vendor.less"
                }
            }
        },
        watch: {
            files: ["app/**/less/**.less","app/**","index.html"],
            tasks: ["build"]
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['app/**','bower_components/**','index.html','!app/**/less/*.less','!app/**/less','!bower_components/**/less/*.less','!bower_components/**/less'],
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
                path: 'http://localhost:8080'
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
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js']
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

    grunt.registerTask('default', ['karma','build','connect','open','watch']);
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['jshint', 'clean', 'copy', 'less']
    );
};