// $('.slide-w').slick({
//     centerMode: true,
//     centerPadding: '25%',
//   });

  $(function(){
    $(".slide-w").slick({
      speed: 1000,
      dots: true,
      dotsClass: 'slide-dots'
    });
  });

  $(function(){
    $(".open").click(function(){
        $("#slideBox").slideToggle("slow");
    });
  });