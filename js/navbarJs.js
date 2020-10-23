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
          $('a').removeClass('.btn btn-light btn-lg ');
       
    }
})