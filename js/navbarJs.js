
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
   
    });
  
});

$(document).ready(function() {
      $(".menu-dropdown-menu").on("click", function() {
      $("nav ul").toggleClass("showing");
     
      });
    
  });

                                    /*  Scrolling Effect */
                                    /*  Scrolling Effect */

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.fixed-top').removeClass('.bg-transparent');
          $('.fixed-top').addClass('nav-scrolled');
  
    else {
          $('.fixed-top').removeClass('nav-scrolled');
          $('.fixed-top').addClass('bg-transparent');
      
       }
});


                                    /* CARRUSEL */
                                    /* CARRUSEL */
  $(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    
    $('#carouselExampleFade').carousel({interval:1500});       
                             
    
    
    /* MODAL COUNTER */
                              /* MODAL COUNTER */


                        /* CAMBIO DE CLASES CARDS BUTTONS */
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

            /* DISTINTAS OPCIONES EN LOS MOMENTOS DE EJECUCION DEL MODAL  */
      $(window).on('shown.bs.modal', function (e) {
            console.log('el modal se esta mostro');
      });   

      $(window).on('hidden.bs.modal', function (e) {
            console.log('el modal se escondio');

      });

/* CLOSE TAG */
  })

