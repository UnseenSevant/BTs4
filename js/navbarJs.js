$(document).ready(function() {
    $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
    });
});

                                    /*  Scrolling Effect */
                                    /*  Scrolling Effect */

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.fixed-top').removeClass('.bg-transparent');
          $('.fixed-top').addClass('nav-scrolled');
          $('.fixed-top').addClass('bg-dark');     
          $('.fixed-top').removeClass('bg-transparent');
          $('a').addClass('.btn btn-light btn-lg ');
    }

    else {
          $('.fixed-top').removeClass('nav-scrolled');
          $('.fixed-top').addClass('bg-transparent');
          $('a').removeClass('.btn btn-light btn-lg btn-sm ');     
       }
});


                                    /* CARRUSEL */
                                    /* CARRUSEL */
  $(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    
    $('#carouselExampleFade').carousel({
      interval:600
    });       
                              /* MODAL COUNTER */
                              /* MODAL COUNTER */

      $(window).on('show.bs.modal', function (e) {
        console.log('el modal se esta mostrando');

        $("#reservaModal").removeClass('btn-reserva');
        $("#reservaModal").addClass('btn-danger btn-lg btn-block');

        $("#reservaModal").prop('disabled',true); 
      });

      $(window).on('hide.bs.modal', function (e) {
            console.log('el modal se esta esconcdiendo');
            $("#reservaModal").removeClass('btn-danger btn-lg btn-block');
       $("#reservaModal").addClass('btn-reserva btn-lg');
      });

      $(window).on('shown.bs.modal', function (e) {
            console.log('el modal se esta mostro');
      });   

      $(window).on('hidden.bs.modal', function (e) {
            console.log('el modal se escondio');

      });

                              /* IMAGEMIN */
                              /* IMAGEMIN */

            const imagemin = require('imagemin');
      const imageminJpegtran = require('imagemin-jpegtran');
      const imageminPngquant = require('imagemin-pngquant');
            
      (async () => {
            const files = await imagemin(['images/*.{jpg,png}'], {
                  destination: 'build/images',
                  plugins: [
                  imageminJpegtran(),
                  imageminPngquant({
                        quality: [0.5, 0.5]
                  })
                  ]
            });
            
            console.log(files);
            //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
      })();




/* CLOSE TAG */
  })


            