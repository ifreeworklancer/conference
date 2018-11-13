import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;
import 'flickity/dist/flickity.css';

(function () {

  /**
   * Burger-menu
   */
  $('.burger-menu').click(function () {
    var menu = $('.menu');
    $(this).toggleClass('active');
    if (menu.is(':visible')) {
      menu.slideUp();
    } else {
      menu.slideDown();
    }
  });


  /**
   * Form-label
   */

  $('.form-control').on('focus', function () {
    $(this).parents('.form-group').addClass('in-focus');
  });

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parents('.form-group').addClass('in-focus');
    } else {
      $(this).parents('.form-group').removeClass('in-focus');
    }
  });

  /**
   * Tabs
   */

  $('.program-tabs-header-list').find('li').eq(0).addClass('active');
  $('.program-tabs-body-item').eq(0).addClass('active');
  var programHeight = $('.program-tabs-body-item').height();
  $('.program-tabs-body').css('padding-top', `${programHeight}px`);
  
  console.log($('.program-tabs-body-item').height());
  
  $('.program-tabs-header-list').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('#program').find('.program-tabs-body-item').removeClass('active').eq($(this).index()).addClass('active');
      $('.program-tabs-body').css('padding-top',  $('.program-tabs-body-item').eq($(this).index()).height() + 'px');
  });


  /**
   * Scroll
   */
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');

    if (id.length > 1) {

      var top = $(id).offset().top;

      $('body,html').animate({
        scrollTop: top
      }, 1500);
    }
  });

  /**
   * Slider
   */
  // if ($('.header-banner-slider')) {

  //   var elem1 = document.querySelector('.header-banner-slider');
  //   if (elem1) {

  //     const flkty1 = new Flickity(elem1, {
  //       prevNextButtons: false,
  //       cellAlign: 'left',
  //       cellSelector: '.header-banner-slider-item',
  //       contain: true,
  //       draggable: false,
  //     });


  //     var prevArrowHeader = document.querySelector('.slider-nav-arrow-prev--header-banner');

  //     prevArrowHeader.addEventListener('click', function () {
  //       flkty1.previous(false, false);
  //     });

  //     var nextArrowHeader = document.querySelector('.slider-nav-arrow-next--header-banner');

  //     nextArrowHeader.addEventListener('click', function () {
  //       flkty1.next(false, false);
  //     });
  //   }
  // }

})(jQuery)