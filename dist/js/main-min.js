$(function(){"use strict";$(".faq1").on("click",function(){$(this).siblings(".faq1").children(".fa").removeClass("dis"),$(this).siblings(".faq1").children(".ime").removeClass("fa-minus"),$(this).siblings(".faq1").children(".ime").addClass("fa-plus"),$(this).children(".ime").toggleClass("fa-plus").toggleClass("fa-minus"),$(this).children(".fa").toggleClass("dis"),console.log("hi")}),$(window).on("scroll",function(){$(window).scrollTop()>=400?$(".ii").fadeIn():$(".ii").fadeOut()}),$(".ii").on("click",function(){$("html ,body").stop().animate({scrollTop:0})}),$(".cartjs").on("click",function(){$(".jsdiv").toggle()});var s=0;$(".jsbut").on("click",function(){s++;var i=$(this).siblings("p").children(".od").text(),l=$(this).siblings("p").children(".se").text().replace("$",""),a=parseInt(l)-1;$(".jsdiv2").fadeIn(),1==s?($(".divme").append('<ul class="uu"> <li> <p>'+i+'</p></li> <li> <input class="in1" type="text" value='+s+'</li><li> <button class="odbut">x</button></li> <li> <span>'+a+"$</span></li></li></ul> "),$(".divme").append('<p class="odp1"> discount:$1.00</p>')):$(".in1").attr("value",s),$(".odbut").on("click",function(){$(this).parent().parent("ul").siblings("ul").hasClass("uu")?(console.log($(this).parent().parent()),$(this).parent().parent().siblings(".odp1").remove(),$(this).parent().parent().remove(),s=0):s>1&&!$(this).parent().parent().siblings().hasClass("uu")?(console.log("11"),$(".odbut").parent().parent().siblings(".odp1").remove(),$(".odbut").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut()):1!=s||$(this).parent().parent().siblings().hasClass("uu")||(console.log("11"),$(".odbut").parent().parent().siblings(".odp1").remove(),$(".odbut").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut())})});var e=0;$(".jsbut1").on("click",function(){e++;var i=$(this).siblings("p").children(".od").text(),l=$(this).siblings("p").children(".se").text().replace("$",""),a=parseInt(l)-1;$(".jsdiv2").fadeIn(),1==e?($(".divme").append('<ul class="uu"> <li> <p>'+i+'</p></li> <li> <input class="in" type="text" value='+e+'</li><li> <button class="odbut1">x</button></li> <li> <span>'+a+"$</span></li></li></ul> "),$(".divme").append('<p class="odp"> discount:$1.00</p>')):$(".in").attr("value",e),$(".odbut1").on("click",function(){$(this).parent().parent("ul").siblings("ul").hasClass("uu")?(console.log($(this).parent().parent()),$(this).parent().parent().siblings(".odp").remove(),$(this).parent().parent().remove(),e=0):e>1&&!$(this).parent().parent().siblings().hasClass("uu")?(console.log("11"),$(".odbut1").parent().parent().siblings(".odp").remove(),$(".odbut1").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut()):1!=e||$(this).parent().parent().siblings().hasClass("uu")||(console.log("11"),$(".odbut1").parent().parent().siblings(".odp").remove(),$(".odbut1").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut())})});var t=0;$(".jsbut2").on("click",function(){t++;var i=$(this).siblings("p").children(".od").text(),l=$(this).siblings("p").children(".se").text().replace("$",""),a=parseInt(l)-1;$(".jsdiv2").fadeIn(),1==t?($(".divme").append('<ul class="uu"> <li> <p>'+i+'</p></li> <li> <input class="in2" type="text" value='+s+'</li><li> <button class="odbut2">x</button></li> <li> <span>'+a+"$</span></li></li></ul> "),$(".divme").append('<p class="odp2"> discount:$1.00</p>')):$(".in2").attr("value",t),$(".odbut2").on("click",function(){$(this).parent().parent("ul").siblings("ul").hasClass("uu")?($(this).parent().parent().siblings(".odp2").remove(),$(this).parent().parent().remove(),t=0):t>1&&!$(this).parent().parent().siblings().hasClass("uu")?(console.log("11"),$(".odbut2").parent().parent().siblings(".odp2").remove(),$(".odbut2").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut()):1!=t||$(this).parent().parent().siblings().hasClass("uu")||(console.log("11"),$(".odbut2").parent().parent().siblings(".odp2").remove(),$(".odbut2").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut())})});var n=0;$(".jsbut3").on("click",function(){n++,console.log(n);var i=$(this).siblings("p").children(".od").text(),l=$(this).siblings("p").children(".se").text().replace("$",""),a=parseInt(l)-1;$(".jsdiv2").fadeIn(),1==n?($(".divme").append('<ul class="uu"> <li> <p>'+i+'</p></li> <li> <input class="in3" type="text" value='+n+'</li><li> <button class="odbut3">x</button></li> <li> <span>'+a+"$</span></li></li></ul> "),$(".divme").append('<p class="odp3"> discount:$1.00</p>')):$(".in3").attr("value",n),console.log($(".divme").children().length),$(".odbut3").on("click",function(){$(this).parent().parent().siblings().hasClass("uu")?(console.log("00"),$(this).parent().parent().siblings(".odp3").remove(),$(this).parent().parent().detach(),n=0):n>1&&!$(this).parent().parent().siblings().hasClass("uu")?(console.log("11"),$(".odbut3").parent().parent().siblings(".odp3").remove(),$(".odbut3").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut()):1!=n||$(this).parent().parent().siblings().hasClass("uu")||(console.log("11"),$(".odbut3").parent().parent().siblings(".odp3").remove(),$(".odbut3").parent().parent().remove(),n=0,t=0,e=0,s=0,$(".jsdiv2").fadeOut())})}),$(".ch").on("click",function(){console.log(s+t+n+e);var i=s+e+n+t;console.log(i),s+e+t+n<3?(alert("you cant "),console.log(s+t+n+e)):location.href="check.html"})});