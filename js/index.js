//메인 사이드 광고
$(function() {
  let page = $('.banner:visible').index()+1;
  let bannerlen = $('.banner').length;
  
  $(".logomenu p").text(`${page} / ${bannerlen}`)

  $('.leftbtn').click(function() {
      --page;
      if(page == 0){
        page = bannerlen;
      }
      $('.banner').eq(page-1).fadeIn().siblings('.banner').hide();
      $(".logomenu p").text(`${page} / ${bannerlen}`)
  });

  $('.rightbtn').click(function() {
      ++page;
      if(page > bannerlen){
        page=1;
      }
      $('.banner').eq(page-1).fadeIn().siblings('.banner').hide();
      $(".logomenu p").text(`${page} / ${bannerlen}`)
  });


  // 메인 대형슬라이더
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,    
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        let bgcolor=["#efefef","#cdfcd8","#fff3d9","#fff7c0","#ffe9dc"]
       
        let idx=this.activeIndex
        $(".bigswiper").css("background-color",bgcolor[idx]).css("transition","0.4s")
      }
    },
  });

});

//마우스 클릭 슬라이더
$(document).ready(function(){

$('.prev').click(function(){

  $('.sld li:last').prependTo('.sld');

  $('.sld').css('margin-left',-1000);

  $('.sld').stop().animate({marginLeft:0},800);

});


$('.next').click(function(){

 $('.sld').stop().animate({marginLeft:-1000},800, function(){

    $('.sld li:first').appendTo('.sld');

    $('.sld').css({marginLeft:0});

 });

});
});



// MD추천도서
$(document).ready(function(){

    $('.tab_menu').click(function(){
      let index = $(this).index();

      $('.tab_list').eq(index).show().siblings('.tab_list').hide();
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

