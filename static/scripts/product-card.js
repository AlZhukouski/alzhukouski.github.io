$('.product-slider__gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 425,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '110px',
      }
    }]
});

$('.form__btn--modal').click(function () {
  $.fancybox.close();
  setTimeout(function (){
    $.fancybox.open({
      src  : '.form__modal-success',
      type : 'inline',
      opts : {
        afterShow : function( instance, current ) {
          console.info( 'done!' );
        }
      }
    });
  }, 400)
})
