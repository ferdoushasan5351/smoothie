
if($(".testimonial-item-wrap").length){
  $('.testimonial-item-wrap').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
    centerPadding: '0',
    autoplay:true,
    autoplaySpeed:1000,
    speed:1000
    });
}
    


  $(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 1,
    dots:false,
    centerMode: true,
    centerPadding: '0',
    autoplay:true,
    autoplaySpeed:2000,
    speed:1000
    });
  });


  $( document ).ready(function() {
    

    $('.hamburger').click(function(){
      $('body').toggleClass('show')
    })
  
  
  })