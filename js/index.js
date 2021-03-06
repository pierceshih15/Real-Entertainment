const element = document.querySelector('#navbarNavAltMarkup');
const open = document.querySelector('.navbar-toggler');
const close = document.getElementById('close');
const mobileHome = document.querySelector('.mobileHome');
const mobileAbout = document.querySelector('.mobileAbout');
const mobileProject = document.querySelector('.mobileProject');
const contactInfo = document.querySelector('.contactInfo');

// GoTop Action
$(document).ready(function () {
  $('.backButton').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1600);
  });
});

// 點擊開啟動畫
open.addEventListener('click', function () {
  element.classList.remove('show');
  mobileHome.classList.remove('animated', 'fadeOutDown');
  mobileAbout.classList.remove('animated', 'fadeOutDown');
  mobileProject.classList.remove('animated', 'fadeOutDown');
  contactInfo.classList.remove('animated', 'fadeOutDown');
  element.classList.remove('animated', 'rotateOutUpLeft');

  element.classList.add('animated', 'rotateInUpLeft');
  mobileHome.classList.add('animated', 'fadeInUp');
  mobileAbout.classList.add('animated', 'fadeInUp');
  mobileProject.classList.add('animated', 'fadeInUp');
  contactInfo.classList.add('animated', 'fadeInUp');
});


// 點擊關閉動畫
close.addEventListener('click', function () {
  element.classList.remove('animated', 'rotateInUpLeft');
  mobileHome.classList.remove('animated', 'fadeInUp');
  mobileAbout.classList.remove('animated', 'fadeInUp');
  mobileProject.classList.remove('animated', 'fadeInUp');
  contactInfo.classList.remove('animated', 'fadeInUp');

  mobileHome.classList.add('animated', 'fadeOutDown');
  mobileAbout.classList.add('animated', 'fadeOutDown');
  mobileProject.classList.add('animated', 'fadeOutDown');
  contactInfo.classList.add('animated', 'fadeOutDown');
  element.classList.add('animated', 'rotateOutUpLeft');
});