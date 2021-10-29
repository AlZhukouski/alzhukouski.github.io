$('.spritespin').spritespin({
  source: '/static/media/bike6x6_big.jpg',
  frames: 34,
  // The 6x6 sprite sheet contains 6 frames in one row.
  framesX: 6,
  width: 713,
  height: 713,
  sense: -1,
  frameTime: 60,
  responsive : true,
  plugins: [
    '360',
    'move'
  ]
});

let apiSprite = $('.spritespin').spritespin('api');

setTimeout(function (){
  apiSprite.stopAnimation();
}, 1000)


$('.examples__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '25vw',
      }
    }]
});
