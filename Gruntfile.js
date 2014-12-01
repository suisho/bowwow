
module.exports = function(grunt) {
  
  grunt.initConfig({
    'build-atom-shell-app': {
      options: {
        platforms: ["darwin", "win32"]
      }
    },
    zip : {
      'win.zip' : 'build/win32/**/*',
      'darwin.zip' : 'build/darwin/**/*',
    },
  })
  grunt.loadNpmTasks('grunt-atom-shell-app-builder')
  grunt.loadNpmTasks('grunt-zip')
  
  grunt.registerTask("default",['build-atom-shell-app', 'zip'])
}