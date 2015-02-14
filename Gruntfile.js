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
                options: {
                    sourceMap: true
                },
                files: {
                    'build/optimized.min.js': ['build/optimized.js']
                }
            }
        },

        less: {
            build: {
                options: {
                    paths: ["public/css/less"]
                },
                files: {
                    "build/lessStyles.css": "public/css/less/styles.less"
                }
            },
            dev: {
                options: {
                    paths: ["public/css/less"]
                },
                files: {
                    "public/css/styles.css": "public/css/less/styles.less"
                }
            }

        },

        cssmin: {
            build: {
                options: {
                    sourceMap: true
                },

                files: {
                    'build/styles.min.css': [ 'public/css/bootstrap.min.css', 'build/lessStyles.css']
                }

            }
        },

        watch: {
            dev: {
                files: ['public/css/less/*.less'], // which files to watch
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