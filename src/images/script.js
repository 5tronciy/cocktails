$(document).ready(function(){
  $(".js-coc-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".coc-list .coc-card__name").filter(function() {
        $(this).closest('.coc-list__item').toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
  });

  /* scroll up */
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 100) $(".js-scrollup").addClass('is-visible');
    else $(".js-scrollup").removeClass('is-visible');
  });

  $(".js-scrollup").on("click", function () {
    $('body, html').animate({
        scrollTop: 0
      },250);
  });

  $(".js-scrollup").on("click", function () {
    $('body, html').animate({
        scrollTop: 0
      },250);
  });

  var topHeight = $('.js-top').height();
  $(".js-scroll-link").on("click", function(e){
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - topHeight}, 1500);
  });
});

