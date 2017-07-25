$s(document).ready(function(){
  $s('.image-slider').slick({
    dots: false,
    infinite: false,
    speed: 450,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true
  });
});
