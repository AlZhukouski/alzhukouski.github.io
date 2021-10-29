
$.fn.jQuerySimpleCounter = function( options ) {
  let settings = $.extend({
    start:  0,
    end:    100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options );

  let thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      let mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};



$('#counter1').jQuerySimpleCounter({end: $('#counter1').attr('data-count'),duration: 3000});
$('#counter2').jQuerySimpleCounter({end: $('#counter2').attr('data-count'),duration: 3200});
$('#counter3').jQuerySimpleCounter({end: $('#counter3').attr('data-count'),duration: 3400});


