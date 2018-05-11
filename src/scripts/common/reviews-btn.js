const $ = require('jquery');

$(document).ready(function() {
    if($('#reviews-btn').length){
      $("document").ready(function($){
        
        $('#reviews-btn').on('click', function(event) {
            event.preventDefault();
            $('.reviews__list--hidden').removeClass('visuallyhidden');
            $('#reviews-btn').addClass('visuallyhidden');
        });
          
      });
    }

    if($('.button--up').length){
        $("document").ready(function($){
            $('.button--up > a[href^="#"]').on('click', function(event) {
              event.preventDefault();
              
              var sc = $(this).attr("href"),
                  dn = $(sc).offset().top;
              
              $('html, body').animate({scrollTop: dn}, 1000);
              
            });
        });
    }
});