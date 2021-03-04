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

var yy=0;
var img1=" ";
$(".cartjs").on('click',function()
{
    
    yy++;
    if(count==0&&count1==0&&count2==0&&count3==0)
    { 

    $(".jsdiv").fadeToggle();
   
    }
    else 
    {
        $(".jsdiv").fadeOut();

        $(".jsdiv2").fadeIn();
    }
    
  
});
  
  
 


   

 
var count= 0;
var y;
 
$(".jsbut").on('click',function()
{
    count++;
    img1=$(this).parent().children(".origin").attr("src");
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var x= localStorage.setItem("myitem",img1);
    var y=localStorage.setItem("kk",count.toString());
    console.log(y);
 
    console.log("kkk"+y);
       
    
    b=localStorage.getItem("myitem");
   
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
        var x= localStorage.setItem("myitem",img1);
       
     
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
    img1=$(this).parent().children(".origin").attr("src");
    
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var x= localStorage.setItem("myitem1",img1);
    var g=localStorage.setItem("kk1",count1.toString());
       
    
    b=localStorage.getItem("myitem1");
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
    img1=$(this).parent().children(".origin").attr("src");
     
    var licontent=$(this).siblings("p").children(".od").text();
    
    var tryit =$(this).siblings("p").children(".se").text().replace('$','');
    var dicound=parseInt(tryit)-1;
    var x= localStorage.setItem("myitem2",img1);
     
    var yy=localStorage.setItem("kk2",count2.toString());
    
    b=localStorage.getItem("myitem2");
   
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
var imm=" ";
var b;
//console.log(b);

$(".jsbut3").on('click',function()
{
    img1=$(this).parent().children(".origin").attr("src");
    console.log(img1);
    count3++;
  //  console.log(count3);
  //  imm=$("this").parent().children(".origin").attr("src");
    //console.log(imm);
     
       // img1=$(this).parent().children(".origin").attr("src");
       var x= localStorage.setItem("myitem3",img1);
       var yyy=localStorage.setItem("kk3",count3.toString());
       
    
     b=localStorage.getItem("myitem3");
    
    
   //  console.log(b);
  
    
       
  //  console.log("myitem");
     
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

//console.log(img1);

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
   // var l=  localStorage.getItem("myitem");
   // var f=localStorage.getItem("myitem1");
   // var e=localStorage.getItem("myitem2");
   // var w=localStorage.getItem("myitem3");

    location.href="check.html";

 // console.log(l);
    
   // $(".montg1").attr(img1);
  
 // $(".montg").attr("src",l);
  
 
    

  }
   
  

  
});
 
    var x=localStorage.getItem("myitem");
 
 var n=1;
 var nn=1;
  var nnn=1;
  var nnnn=1;
 
 var h=localStorage.getItem("kk");
 //console.log("hi"+h);
 var e=parseInt(h);
console.log(e);

 
  
  
var c=localStorage.getItem("myitem1");
var cc=localStorage.getItem("kk1");
var ee=parseInt(cc);

var u=localStorage.getItem("myitem2");
var uu=localStorage.getItem("kk2");
var uuu=parseInt(uu);

var q=localStorage.getItem("myitem3");
var qq=localStorage.getItem("kk3");
var qqq=parseInt(qq);
 console.log(ee);
 console.log(uuu);
 console.log(qqq);
//console.log(p);
var m=1;
for(var i=0;i<1;i++){
    if(e>=1){
        $(".check .montg .kk ").append(' <tr class="tr4"> <td>' +m+'</td> <td> <img class="don" src='+x+'> </td> <td><button class="bb"><i class="fas fa-minus"></i></button><button class="th">'+n+'</button> <button class="bbb"><i class="fas fa-plus"></i></button></td> <td> Fortune Sunflower Oil</td> <td> $290.00</td><td class="td4"><i class="fas fa-times"></i></td></tr>')
//$(".check .montg").append('<img class="don" src='+x+'>');
localStorage.removeItem("kk");
m++;
$(".td4").on('click',function()
{
    $(".tr4").remove();
})
$(".bb").on('click',function()
{
   
    console.log("...");
    console.log(n);
    if(n>1){

        n--;
        $(this).siblings(".th").text(n);
        }
})
$(".bbb").on('click',function()
{
    n++;
    
    $(this).siblings(".th").text(n);
        
  
})

    }
}

for(var i=0;i<1;i++){
    
    if(ee>=1){
        $(".check .montg  .kk").append(' <tr class="tr3"> <td>' +m+'</td> <td> <img class="don" src='+c+'> </td> <td><button class="bb1"><i class="fas fa-minus"></i></button><button class="th1">'+nn+'</button> <button class="bbb1"><i class="fas fa-plus"></i></button></td> <td>Basmati Rise (5 Kg)</td> <td> $290.00</td><td class="td3"><i class="fas fa-times"></i></td></tr>')
        //$(".check .montg").append('<img class="don" src='+c+'>');
        localStorage.removeItem("kk1");
        
        m++;
        $(".td3").on('click',function()
        {
            $(".tr3").remove();
        })
        $(".bb1").on('click',function()
{
   
    console.log("...");
    console.log(n);
    if(nn>1){

        nn--;
        $(this).siblings(".th1").text(nn);
        }
})
$(".bbb1").on('click',function()
{
    nn++;
    
        
    $(this).siblings(".th1").text(nn);
        
  
})
            }}
            for(var i=0;i<1;i++){
            if(uuu>=1){
                $(".check .montg .kk ").append(' <tr class="tr1"> <td>' +m+'</td> <td> <img class="don" src='+u+'> </td> <td><button class="bb2"><i class="fas fa-minus"></i></button><button class="th2">'+nnn+'</button> <button class="bbb2"><i class="fas fa-plus"></i></button></td><td>Pepsi Soft Drink (2 Ltr)</td> <td> $290.00</td><td class="td1"><i class="fas fa-times"></i></td></tr>')
               // $(".check .montg").append('<img class="don" src='+u+'>');
                localStorage.removeItem("kk2");
                m++;
                $(".td1").on('click',function()
                {
                    $(".tr1").remove();
                })
                $(".bb2").on('click',function()
{
   
    console.log("...");
    console.log(n);
    if(nnn>1){

        nnn--;
        $(this).siblings(".th2").text(nnn);
        }
})
$(".bbb2").on('click',function()
{
    nnn++;
    
        
    $(this).siblings(".th2").text(nnn);
        
  
})
                    }
                }for(var i=0;i<1;i++){
                    if(qqq>=1){
                        $(".check .montg .kk ").append(' <tr class="tr2"> <td>' +m+'</td> <td> <img class="don" src='+q+'> </td> <td><button class="bb3"><i class="fas fa-minus"></i></button><button class="th3">'+nnnn+'</button> <button class="bbb3"><i class="fas fa-plus"></i></button></td> <td>dogs food</td> <td> $290.00</td><td class="td2"><i class="fas fa-times"></i></td></tr>')

                      //  $(".check .montg").append('<img class="don" src='+q+'>');
                        localStorage.removeItem("kk3");
                        m++;
                        $(".td2").on('click',function()
                        {
                            $(".tr2").remove();
                        })
                        $(".bb3").on('click',function()
{
   
    console.log("...");
    console.log(nnnn);
    if(nnnn>1){

        nnnn--;
        $(this).siblings(".th3").text(nnnn);
        }
})
$(".bbb3").on('click',function()
{
    nnnn++;
    
        
        $(this).siblings(".th3").text(nnnn);
        

})
                            }
            
                        }
                        
        
 



});

