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
$(".cartjs").on('click',function()
{
    $(".jsdiv").toggle();
});
var count= 0;
$(".jsbut").on('click',function()
{
        
     count++;
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var ele=$(this).siblings(".jsdiv2");
     
    ele.fadeIn();
    if(  !$(this).siblings(".jsdiv2").children().hasClass("divme"))
    {
        

        ele.prepend('<div class="divme"></div>')
        
       $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in" type="text" value='+ count +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
       $(".divme").append('<p class="odp"> discount:$1.00</p>');
        $(".odbut").on('click',function()
    {
          $(this).parent().parent().parent(".divme").remove();
    });
    }
    else{
        
        $(".in").attr("value",count++);
        
    }
});
var count1=0;
$(".jsbut1").on('click',function()
{
    
        
     count1++;
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var ele=$(this).siblings(".jsdiv2");
     var ele2=$(this);
    
     ele.fadeIn();
     ele2.fadeIn();
    
     
 if(!$(this).siblings().hasClass("jsdiv2")&&(count1==1)&&(count==0))
    {
        
        ele2.parent(".offer").append('<div class="jsdiv2"></div>');
         
        $(this).siblings(".jsdiv2").prepend('<div class="divme"></div>');
        
        $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count1 +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
        $(".divme").append('<p class="odp"> discount:$1.00</p>');
       
         $(".odbut").on('click',function()
     {
           $(this).parent().parent().parent(".divme").remove();
     });
     
     ele.fadeIn();
     ele2.fadeIn();
    }
    
     
     else if(  !$(this).siblings(".jsdiv2").children().hasClass("divme")&&(count1==1))
    {
       // $(this).children(".jsdiv2").remove();
        
        ele.prepend('<div class="divme"></div>')
        
       $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count1 +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
       $(".divme").append('<p class="odp"> discount:$1.00</p>');
        $(".odbut").on('click',function()
    {
        $(this).parent().parent().parent(".divme").remove();
    });
    }
    else{
        $(".in1").attr("value",count1++);

    }
    
   
   
});
var count2=0;
$(".jsbut2").on('click',function()
{
        
     count2++;
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var ele=$(this).siblings(".jsdiv2");
    var ele2=$(this);
    ele.fadeIn();
     
    
     
 if(!$(this).siblings().hasClass("jsdiv2")&&(count2==1)&&(count==0))
    {
        
        ele2.parent(".offer").append('<div class="jsdiv2"></div>');
         
        $(this).siblings(".jsdiv2").prepend('<div class="divme"></div>');
        
        $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in2" type="text" value='+ count1 +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
        $(".divme").append('<p class="odp"> discount:$1.00</p>');
       
         $(".odbut").on('click',function()
     {
           $(this).parent().parent().parent(".divme").remove();
     });
     
     
    }
    
     
     else if(  !$(this).siblings(".jsdiv2").children().hasClass("divme")&&(count2==1))
    {
       // $(this).children(".jsdiv2").remove();
        
        ele.prepend('<div class="divme"></div>')
        
       $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in2" type="text" value='+ count2 +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
       $(".divme").append('<p class="odp"> discount:$1.00</p>');
        $(".odbut").on('click',function()
    {
        $(this).parent().parent().parent(".divme").remove();
    });
    }
    else{
        $(".in2").attr("value",count2++);

    }
    
    
});
var count3=0
$(".jsbut3").on('click',function()
{
        
     count3++;
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var ele=$(this).siblings(".jsdiv2");
    var ele2=$(this);
    ele.fadeIn();
     
    
     
 if(!$(this).siblings().hasClass("jsdiv2")&&(count3==1)&&(count==0))
    {
        
        ele2.parent(".offer").append('<div class="jsdiv2"></div>');
         
        $(this).siblings(".jsdiv2").prepend('<div class="divme"></div>');
        
        $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in3" type="text" value='+ count3 +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
        $(".divme").append('<p class="odp"> discount:$1.00</p>');
       
         $(".odbut").on('click',function()
     {
           $(this).parent().parent().parent(".divme").remove();
     });
     
     
    }
    
     
     else if(  !$(this).siblings(".jsdiv2").children().hasClass("divme")&&(count3==1))
    {
       // $(this).children(".jsdiv2").remove();
        
        ele.prepend('<div class="divme"></div>')
        
       $(".divme").append('<ul> <li> <p>'+ licontent+'</p></li> <li> <input class="in3" type="text" value='+ count3 +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
       $(".divme").append('<p class="odp"> discount:$1.00</p>');
        $(".odbut").on('click',function()
    {
        $(this).parent().parent().parent(".divme").remove();
    });
    }
    else{
        $(".in3").attr("value",count3++);

    }
    
});

});