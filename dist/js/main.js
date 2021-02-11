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
});