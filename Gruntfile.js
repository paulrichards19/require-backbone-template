
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
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
            my_target: {
                files: {
                    'build/optimized.min.js': ['build/optimized.js']
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['requirejs','uglify']);

};