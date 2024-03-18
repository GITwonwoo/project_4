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
    autoplay: {
      delay: 2500,
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
  });

});

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

      $('.tab_list').eq(index).show().siblings('.tab_list').hide();
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

