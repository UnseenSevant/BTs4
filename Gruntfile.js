  
/* INSTALAR 'RUBY' DESDE SU WEB/ INSTALAR SASS desde la consola de Visual Studio CON 'gem install sass' */

 /* HOLA MUNDO EN LA CONSOLA DE GRUNT*/
/*
module.exports = function(grunt){
    grunt.registerTask(
        'holaMundo',
        function(){
            
            grunt.log.write('holaMundoodnuMaloH\n').ok();
        }
    ); 

    /* GRTUN TRANSFORMANDO DE SCSS A CSS */
module.exports = function(grunt){
  require('time-grunt')(grunt)
  require('jit-grunt')(grunt,{
    useminPrepare:'grunt-usemin'
  });

                /* holaMundoodnuMaloH */
  grunt.log.write('holaMundoodnuMaloH\n').ok();

   grunt.initConfig({
     
        sass: {
          dist: {
            files: [{
              expand: true,
              cwd: 'styles',
              src: ['*.scss'],
              dest: 'css',
              ext: '.css'
            }]
          }
        },
        /* OBSERVA Y CONVIERTE */
        watch: {
          files: ['css/*.scss'],
          tasks: ['css'],
        },
        browserSync: {
          dev: {
              bsFiles: {
                  src : [
                      'css/*.css',
                      '*.html',
                      'js/*.js'
                  ]
              },
              options: {
                  watchTask: true,
                  server: './'
              }
          }
        },
        imagemin:{
          dynamic: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.{png,jpg,gif}'],
              dest: 'dist/'
          }]
      }
  },
    copy: {
      html: {
        files: [{
          expand: true,
          dot: true,
          cwd: './',
          src: ['*.html'],
        dest: 'dist/'
    }]
  }
},

clean:{

  build:{
    src:['dist/']
  }
},

cssmin:{
  dist:{}

},

uglify:{
  dist:{}
},

filrerev:{
  options:{
  encoding:'utf8',
  algoritm:'md5',
  lenght:20

},

  release:{
      files:[{
        src:[
          'dist/js/*.js',
          'dist/css/*.css'
        ]
    }]
  }
}, 





  });

                /* ASIGNAR TAREA A NPM */
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    /* CONTRIB COPY */
    grunt.loadNpmTasks('grunt-contrib-copy');
    /* CONTRIB CLEAN */
    grunt.loadNpmTasks('grunt-contrib-clean');
    /* CONTRIB CONCAT */     
    grunt.loadNpmTasks('grunt-contrib-concat');
    /* CONTRIB CSSMIN */     
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    /* CONTRIB uglify */  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    /* CONTRIB filerev */  
    grunt.loadNpmTasks('grunt-contrib-filerev');



      /* NOMBRAR Y EJECUTAR TAREA EN NPM */
    grunt.registerTask('css',['sass']);
    grunt.registerTask('img:compres',['imagemin']);
    grunt.registerTask('tortafrita',['browserSync','watch']);
    

};

