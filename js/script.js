jQuery(document).ready(function($) {
  $(".owl-carousel").owlCarousel({
    items:1,
    merge:true,
    nav:true,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    navClass: ['owl-prev','owl-next'],
    dots:false
  });

  $(".reviews-slider").slick({
    slidesToShow:2,
    variableWidth: true,
    nextArrow: "<i class='fas fa-angle-right'></i>",
    prevArrow: "<i class='fas fa-angle-left'></i>",
  });

  $(".kraska li").click(function(){
    $(this).children(".popup-master").addClass("popup-opened");
    $(".popup-overlay").addClass("popup-opened");
  });

  $(".popup-close").click(function(e){
    $(".popup-master").removeClass("popup-opened");
    $(".popup-overlay").removeClass("popup-opened");
    return false;
  });

  $(".popup-overlay").click(function(){
    $(".popup-master").removeClass("popup-opened");
    $(this).removeClass("popup-opened");
  });

  $('.top-butt').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

});