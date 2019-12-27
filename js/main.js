$(document).ready(function() {
 $('.work__btn[filter]').click(function(){
    if($(this).attr('filter')=='all'){
        if($(this).attr('val')=='off'){
            $('.work__btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.works__cards').show(300);
        }
    }else 
    if($(this).attr('val')=='off'){
      $('.work__btn[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.works__cards').hide(300);
      var filter = $(this).attr('filter');
      $('.works__cards[filter='+filter+']').show(300);
    }
 })
});
$('.team__slider').slick({
   infinite: true,
    arrows: false,
   dots: true,
   dotsClass: "dots-style",
    focusOnSelect: true
});  
$('.vertical-slider').slick({
   infinite: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
   dots: true,
    respondTo: "min",
   dotsClass: "dots-news",
    mobileFirst: true,
}); 

