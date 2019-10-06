/*global $, alert, console*/
$(function(){
    'use strict';
    
// header height
    var myHeader = $('.header'),
    mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    $(window).resize(function(){
    myHeader.height($(window).height());
        
         mySlider.each(function(){
        $(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2);
    });
        
    });
    
    //links add active class
    $('.links li a').click(function(){     
    $(this).parent().addClass('active').siblings()
    .removeClass('active');
    });
    
    //adjust bxslider list item center
    mySlider.each(function(){
        $(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2);
    });
    
    //trigger the Bx slider
    mySlider.bxSlider({
        pager:false
    });
    
    //smooth scroll to div
    $('.links li a').click(function(){
    $('html,body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top        
        }, 1000);  
        console.log('#' + $(this).data('value'));
});
    
    //our auto slider code
    
    (function autoSlider(){
        $('.slider .active').each(function(){
        
         if(!$(this).is(':last-child')) {
         
             $(this).delay(3000).fadeOut(1000,function(){      
             
                 $(this).removeClass('active').next().addClass('active').fadeIn();
               
                  autoSlider();
           
        });
         
         } else{
              
      $(this).delay(3000).fadeOut(1000,function(){       
          
          $(this).removeClass('active');
        
             $('.slider div').eq(0).addClass('active').fadeIn();
                autoSlider();
                                  
          });
         }
        });
    }());  
    
    //trigger mixitup
    $('#Container').mixItUp();

    //shuffle
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
 
    });
    
    //nicescroll
    $('html').niceScroll({
        cursorcolor: '#c17979'
    });
   
});