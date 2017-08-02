module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            rebuild: ['public/']
        },
        apidoc: {
            docs: {
                src: "vendor/woeplanet/woeplanet-api/",
                dest: "public/api/",
                options: {
                    excludeFilters: ["vendor/woeplanet/woeplanet-api/Woeplanet", "vendor/woeplanet/woeplanet-api/public"]
                }
            }
        }
    });

    grunt.registerTask('nodsstore', function() {
        grunt.file.expand({
            filter: 'isFile',
            cwd: '.'
        }, ['**/.DS_Store']).forEach(function(file) {
            grunt.file.delete(file);
        });
    });

    grunt.registerTask('build', ['composer:update', 'apidoc']);
    grunt.registerTask('rebuild', ['clean', 'build']);
};
