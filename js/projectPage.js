// Video
const video1 = document.querySelector('#video1 .video-style')
const nextButton1 = video1.querySelector('.arrow-right-icon')
const video2 = document.querySelector('#video2 .video-style')
const nextButton2 = video2.querySelector('.arrow-right-icon')
const video3 = document.querySelector('#video3 .video-style')
const nextButton3 = video3.querySelector('.arrow-right-icon')
const video4 = document.querySelector('#video4 .video-style')
const nextButton4 = video4.querySelector('.arrow-right-icon')
const video5 = document.querySelector('#video5 .video-style')
const nextButton5 = video5.querySelector('.arrow-right-icon')
const video6 = document.querySelector('#video6 .video-style')
const nextButton6 = video6.querySelector('.arrow-right-icon')

// From 1 to 2
nextButton1.addEventListener('click', function (e) {
  $("#video1 .video-style").addClass("d-none");
  videojs("#video1 #my-player").pause();
  $("#video2 .video-style").removeClass("d-none");
})

// From 2 to 3
nextButton2.addEventListener('click', function (e) {
  $("#video2 .video-style").addClass("d-none");
  videojs("#video2 #my-player").pause();
  $("#video3 .video-style").removeClass("d-none");
})

// From 3 to 4
nextButton3.addEventListener('click', function (e) {
  $("#video3 .video-style").addClass("d-none");
  videojs("#video3 #my-player").pause();
  $("#video4 .video-style").removeClass("d-none");
})

// From 4 to 5
nextButton4.addEventListener('click', function (e) {
  $("#video4 .video-style").addClass("d-none");
  videojs("#video4 #my-player").pause();
  $("#video5 .video-style").removeClass("d-none");
})

// From 5 to 6
nextButton5.addEventListener('click', function (e) {
  $("#video5 .video-style").addClass("d-none");
  videojs("#video5 #my-player").pause();
  $("#video6 .video-style").removeClass("d-none");
})

// From 6 to 1
nextButton6.addEventListener('click', function (e) {
  $("#video6 .video-style").addClass("d-none");
  videojs("#video6 #my-player").pause();
  $("#video1 .video-style").removeClass("d-none");
})

// Project
const projects = document.querySelector('#section1 .projects')
const project = projects.querySelectorAll('.project');
const projectPhoto = projects.querySelectorAll('.project-photo');
const projectIntro = projects.querySelectorAll('.project-intro');

// Click project to scroll to video player

$(document).ready(function () {
  for (let i = 0; i < project.length; i++) {
    project[i].addEventListener('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 1200);
    });
  }
});


// Mouseover Animation
for (let i = 0; i < projectIntro.length; i++) {
  projectPhoto[i].addEventListener('mouseover', function () {
    projectIntro[i].classList.remove('fadeInUp');
    projectIntro[i].classList.remove('slideInUp');
    projectIntro[i].classList.remove('fadeOutDown');
    projectIntro[i].classList.add('project-intro-hover');
    projectIntro[i].classList.add('animated', 'fadeInUp');
  });
}

// Mouseout Animation
for (let i = 0; i < projectIntro.length; i++) {
  projectPhoto[i].addEventListener('mouseout', function () {
    projectIntro[i].classList.add('animated', 'fadeOutDown');
    projectIntro[i].classList.remove('project-intro-hover');
    projectIntro[i].classList.remove('animated');
    projectIntro[i].classList.add('slideInUp');
  });
}