var webp = require('imagemin-webp');

module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    sass: {
	    	dist: {
	    		options: {
	    			style: "expanded"
	    		},
	    		files: {
	    			'public/css/app.min.css': 'src/sass/app.scss'
	    		}
	    	}
	    },
	    jshint: {
	    	all: ['Gruntfile.js', 'src/js/app.js'],
	    	options: {
				// more options here if you want to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
	    },
	    uglify: {
	    	options: {
				mangle: {
					except: ['jQuery']
				}
			},
			my_target: {
				files: {
					'public/js/app.min.js': ['src/js/app.js']
				}
			}
	    },
	    jade: {
			compile: {
				options: {
					pretty: true,
					data: {}
				},
				files: [{
					expand: true,
					cwd: 'src/jade',
					src: [ '*.jade' ],
					dest: '',
					ext: '.html'
				}]
			}
		},
		imagemin: {
			all: {
				options: {
					optimizationLevel: 5,
					svgoPlugins: [{removeViewBox: false}]
				},
				files: [{
					expand: true,
					cwd: 'src/images',
					src: ['*.{png,jpg,gif,webp,svg}'],
					dest: 'public/images'
				}]
			}
		},
	    watch: {
	    	sass: {
	    		files: ['src/sass/*.scss', 'src/sass/**/*.scss'],
	    		tasks: ['sass']
	    	},
	    	jshint: {
	    		files: 'src/js/app.js',
  				tasks: ['jshint']
	    	},
	    	uglify: {
	    		files: ['src/js/app.js'],
	    		tasks: ['uglify']
	    	},
	    	jade:{
	    		files: ['src/jade/*.jade'],
	    		tasks: ['jade']
	    	},
	    	imagemin: {
	    		files: ['src/images/*.{png,jpg,gif,webp,svg}'],
	    		tasks: ['newer:imagemin:all']
	    	}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', ['jshint', 'sass', 'uglify', 'jade', 'newer:imagemin:all']);
};