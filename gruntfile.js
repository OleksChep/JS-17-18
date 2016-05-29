module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/script.min.js'
      }
    },
    uglify: {
      dist: {
        src: 'js/script.min.js',
        dest: 'js/script.min.js'
      }
    },
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'img-src/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'img/'
          }]
        }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      combine: {
        files: {
          'css/style.min.css': ['css/src/*.css']
        }
      },
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['!.min.css'],
        dest: 'release/css/',
        ext: '.min.css'
      }
    },
    watch: {
        scripts: {
            files: ['js/src/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
                spawn: false,
            },
        },
        css: {
            files: ['css/src/*.css'],
            tasks: ['cssmin'],
            options: {
                spawn: false,
            },
        },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin', 'watch']);

};