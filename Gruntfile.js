module.exports = function(grunt){

	grunt.registerTask("yell",function(){
		
	});
	grunt.initConfig({
		preprocess : {
			options : {
				srcDir : 'src'
			},
			static : {
				src: ['src/home.html'],
				dest: 'build/home.html'
			}
		},
		copy : {
			main:{
				files:[
					{expand:true, cwd:'src',src:['images/**'],dest:'build/'},
					{expand:true, cwd:'src',src:['lib/**'],dest:'build/'},
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask("default",['preprocess','copy']);
};