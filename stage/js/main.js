$(function()
{
    "use strict";

$(".faq1").on('click',function()
{
   
    $(this).siblings(".faq1").children(".fa").removeClass("dis");
    $(this).siblings('.faq1').children(".ime").removeClass("fa-minus");
    $(this).siblings('.faq1').children(".ime").addClass("fa-plus");
    $(this).children(".ime").toggleClass("fa-plus").toggleClass("fa-minus");
    $(this).children('.fa').toggleClass("dis");
    
   
    
    

    console.log("hi");


});

$(window).on("scroll",function()
{
    if($(window).scrollTop()>=400){
        
        $(".ii").fadeIn();
    }
    else{
        $(".ii").fadeOut();
    }
  
});
$(".ii").on('click',function()
{
    $("html ,body").stop().animate(
        {
            scrollTop:0
        }
    )
})
});