$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

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

  $(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    
    $('#carouselExampleFade').carousel({
      interval:600
    });
    
       /* MODAL COUTER */
  

      $(window).on('show.bs.modal', function (e) {
        console.log('el modal se esta mostrando');

        $("#reservaModal").removeClass('btn-reserva');
        $("#reservaModal").addClass('btn-warning');
        $("#reservaModal").prop('disabled',true); 
      });

      $(window).on('hide.bs.modal', function (e) {
            console.log('el modal se esta esconcdiendo');

      });

      $(window).on('shown.bs.modal', function (e) {
            console.log('el modal se esta mostro');
      });

     

      $(window).on('hidden.bs.modal', function (e) {
            console.log('el modal se escondio');

            });

      
         



  });

