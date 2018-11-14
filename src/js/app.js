import jquery from 'jquery';
import ScrollReveal from 'scrollreveal'

window.jQuery = window.$ = jquery;

(function () {

  /**
   * Burger-menu
   */
  $('.burger-menu').click(function () {
    var menu = $('.menu');
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });

  /**
   * Fix menu
   */
  $(window).on('scroll', function() {
    if($(this).scrollTop() > $('#intro').height()) {
      $('#app-header').addClass('is-fixed');
    } else {
      $('#app-header').removeClass('is-fixed');
    }
  })

  /**
   * Scroll
   */
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');

    if (id.length > 1) {

      var top = ($(id).offset().top - $('#app-header').height());

      $('body,html').animate({
        scrollTop: top
      }, 1500);

      $('.burger-menu').removeClass('active');
      $('.menu').removeClass('active');
    }
  });


  /**
   * Form
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

  $('form').on('submit', function() {
    $('input').val("");
  })

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
    $('.program-tabs-body').css('padding-top', $('.program-tabs-body-item').eq($(this).index()).height() + 'px');
  });

  /**
   * Footer secondary
   */
  $('.app-footer-secondary').css('margin-top', '-' + $('.app-footer-secondary').innerHeight() + 'px');

  /**
     * Animate scroll
     */
    ScrollReveal().reveal('.intro-item', {
      origin: 'left',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.intro-description', {
      origin: 'left',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.for-who-img', {
      origin: 'left',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.singup-card', {
      origin: 'right',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.for-who-item', {
      origin: 'right',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.speaker-card', {
      origin: 'bottom',
      delay: 500,
      distance: '400px',
  });
  ScrollReveal().reveal('.contacts-item', {
      origin: 'right',
      delay: 500,
      distance: '200px',
  });

  /**
   * Map
   */
var element = document.getElementById('map');

var map = L.map(element);

var logoIcon = L.icon({
  iconUrl: '../images/icon/logo/marker-icon.png',

  iconSize: [45, 45], 
  iconAnchor:   [22, 94], 
  popupAnchor:  [-3, -76] 
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var target = L.latLng('50.44937', '30.52577');

map.setView(target, 14);

L.marker(target, {icon: logoIcon}).addTo(map);

})(jQuery)