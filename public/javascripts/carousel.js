$s(document).ready(function(){
  $s('.image-slider').slick({
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true
  });
});
