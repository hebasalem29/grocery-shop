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
   
    $(".jsdiv2").fadeIn();
   /* if(! ($(".jsdiv2").children(".divme").children("ul").hasClass("uu"))&&count>0)
    {
        count=1;
       /* count=1;
        $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp1"> discount:$1.00</p>');
    }*/
   
//console.log(count);
    if(count==1 )
    {
     
    $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp1"> discount:$1.00</p>');
    }

    else{
        $(".in1").attr("value", count);
    }
    
    
$(".odbut").on('click',function()
{    
    
    if($(this).parent().parent("ul").siblings("ul").hasClass("uu")){
   
      
        
        console.log( $(this).parent().parent());
        $(this).parent().parent().siblings(".odp1").remove();
       
        $(this).parent().parent().remove();
     
        count=0;
      
       
    
    }
    

   

    else if(count>1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut").parent().parent().siblings(".odp1").remove();
        $(".odbut").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();  
    }
    else if(count==1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut").parent().parent().siblings(".odp1").remove();
        $(".odbut").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();   
    }

     });
    
      

    


});
 
var count1= 0;
$(".jsbut1").on('click',function()
{
    count1++;
    
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    $(".jsdiv2").fadeIn();
    
  /*  if(! ($(".jsdiv2").children(".divme").children("ul").hasClass("uu"))&&count1>0)
    {
        count1=1;
    /* count=1;
        $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp1"> discount:$1.00</p>');
    }*/
    if(count1==1 )
    {
     
    $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in" type="text" value='+ count1 +'</li><li> <button class="odbut1">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp"> discount:$1.00</p>');
    }else{
        $(".in").attr("value",count1);
    }
    $(".odbut1").on('click',function()
  {
     
    if($(this).parent().parent("ul").siblings("ul").hasClass("uu")){

        console.log($(this).parent().parent());
        $(this).parent().parent().siblings(".odp").remove();
        $(this).parent().parent().remove();
       
        count1=0;
    }
    
    else if(count1>1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut1").parent().parent().siblings(".odp").remove();
        $(".odbut1").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();  
    }
    else if(count1==1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut1").parent().parent().siblings(".odp").remove();
        $(".odbut1").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();   
    }
     
         
     });
});
var count2= 0;
$(".jsbut2").on('click',function()
{
    count2++;
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
   
    $(".jsdiv2").fadeIn();
  /*  if(! ($(".jsdiv2").children(".divme").children("ul").hasClass("uu"))&&count2>0)
    {
        count2=1;
       /* count=1;
        $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp1"> discount:$1.00</p>');
    }*/
    if(count2==1)
    {
     
    $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in2" type="text" value='+ count +'</li><li> <button class="odbut2">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp2"> discount:$1.00</p>');
    }else{
        $(".in2").attr("value",count2);
    }
    $(".odbut2").on('click',function()
  {
    if($(this).parent().parent("ul").siblings("ul").hasClass("uu")){
        $(this).parent().parent().siblings(".odp2").remove();
        $(this).parent().parent().remove();
        count2=0;
    }
    else if(count2>1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut2").parent().parent().siblings(".odp2").remove();
        $(".odbut2").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();  
    }
    else if(count2==1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut2").parent().parent().siblings(".odp2").remove();
        $(".odbut2").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();   
    }
  /*  else if (  $(".divme").children("ul").length==0) {
        console.log("ppp");
        $(this).parent().parent().siblings(".odp3").remove();
        $(this).parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
        $(".jsdiv2").fadeOut();
    
    }*/

     
     
         
     });
});
var count3= 0;
$(".jsbut3").on('click',function()
{
    count3++;
    console.log(count3);
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
   
    $(".jsdiv2").fadeIn();
   /* if(! ($(".jsdiv2").children(".divme").children("ul").hasClass("uu"))&&count3>0||$(".divme").children("ul").children("li").children(".od"))
    {
        count3=1;
       /* count=1;
        $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in1" type="text" value='+ count +'</li><li> <button class="odbut">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp1"> discount:$1.00</p>');
    }*/
    if(count3==1 )
    {
     
    $(".divme").append('<ul class="uu"> <li> <p>'+ licontent+'</p></li> <li> <input class="in3" type="text" value='+ count3 +'</li><li> <button class="odbut3">x</button></li> <li> <span>'+ dicound +"$"+'</span></li></li></ul> ');
    $(".divme").append('<p class="odp3"> discount:$1.00</p>');
    }
    else{
        $(".in3").attr("value",count3);
    }
    console.log($(".divme").children().length);
    $(".odbut3").on('click',function()
  {  //console.log($(".divme").children().length);
     
    if( $(this ).parent().parent().siblings().hasClass("uu"))
    {
        console.log( "00");
        //console.log("leh");
        $(this).parent().parent().siblings(".odp3").remove();
        $(this).parent().parent().detach();
        count3=0;
       // console.log($(".odbut3").parent().parent().siblings("ul").length)
       
       
      
    }
    

  
   else if(count3>1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut3").parent().parent().siblings(".odp3").remove();
        $(".odbut3").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();  
    }
    else if(count3==1 && !$(this ).parent().parent().siblings().hasClass("uu")) 
    {
        console.log( "11");
        $(".odbut3").parent().parent().siblings(".odp3").remove();
        $(".odbut3").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
       $(".jsdiv2").fadeOut();   
    }
     
    
  
  

 /*else   {
    
        console.log($(".odbut3").parent().parent("ul").parent(".divme").children() );
        console.log("ooo");
        $(".odbut3").parent().parent().siblings(".odp3").remove();
        $(".odbut3").parent().parent().remove();
        count3=0;
        count2=0;
        count1=0;
        count=0;
        $(".jsdiv2").fadeOut();
    
    }*/
   
   
     
     
   // $(".jsdiv2").fadeIn(); 

    
     });
   
    
    
});



$(".ch").on('click',function()
{

    console.log(count+count2+count3+count1);
    var q=count+count1+count3+count2;
console.log(q);
    
//$(".hhh").text(q);
  if(count+count1+count2+count3<3)
  {
      alert("you cant ");
      console.log(count+count2+count3+count1);
  }  
  else{
    location.href="check.html";
 
    

  }

  
});
 


});