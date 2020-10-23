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
})


/* ACORDEON */
/* $(function() {
      var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      
      var links = this.el.find('.link');
      
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
      
      Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
      }
      
      var accordion = new Accordion($('#accordion'), false);
      }); */