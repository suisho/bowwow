
module.exports = function(grunt) {
  
  grunt.initConfig({
    'build-atom-shell-app': {
      options: {
        platforms: ["darwin", "win32"]
      }
    },
    zip : {
      'release.zip' : 'build/*'
    },
  })
  grunt.loadNpmTasks('grunt-atom-shell-app-builder')
  grunt.loadNpmTasks('grunt-zip')
  
  grunt.registerTask("default",['build-atom-shell-app', 'zip'])
}