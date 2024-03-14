
//마우스 클릭 슬라이더
$('.prev').click(function(){

    $('.slide li:last').prependTo('.slide');

    $('.slide').css('margin-left',-1000);

    $('.slide').stop().animate({marginLeft:0},800);

 });


 $('.next').click(function(){

   $('.slide').stop().animate({marginLeft:-1000},800, function(){

      $('.slide li:first').appendTo('.slide');

      $('.slide').css({marginLeft:0});

   });

 });



// MD추천도서
$(document).ready(function(){

    $('.tab_menu').click(function(){
      let index = $(this).index();

      $('.tab_sub').eq(index).show().siblings().hide();
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
