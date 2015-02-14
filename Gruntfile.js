module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            build: {
                options: {
                    baseUrl: "public/js",
                    mainConfigFile: "public/js/main.js",
                    wrap: true,
                    name: "almond",
                    out: "build/optimized.js"
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'build/optimized.min.js': ['build/optimized.js']
                }
            }
        },

        less: {
            build: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "build/styles.css": "public/css/styles.less"
                }
            },
            dev: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/css/styles.css": "public/css/styles.less"
                }
            }

        },

        cssmin: {
            build: {
                options: {

                },
                target: {
                    files: {
                        'build/styles.min.css': [ 'public/css/bootstrap.min.css', 'build/styles.css']
                    }
                }
            }
        },

        watch: {
            dev: {
                files: ['public/css/*.less'], // which files to watch
                tasks: ['less:dev'],
                options: {
                    nospawn: true
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['requirejs:build','uglify:build','less:build','cssmin:build']);
    grunt.registerTask('buildless', ['watch:dev']);

};