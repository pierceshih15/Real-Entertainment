const projects = document.querySelector('#section1 .projects')
const projectPhoto = projects.querySelectorAll('.project-photo');
const projectIntro = projects.querySelectorAll('.project-intro');

for (let i = 0; i < projectIntro.length; i++) {
  projectPhoto[i].addEventListener('mouseover', function () {
    projectIntro[i].classList.remove('fadeInUp');
    projectIntro[i].classList.remove('slideInUp');
    projectIntro[i].classList.remove('fadeOutDown');
    projectIntro[i].classList.add('project-intro-hover');
    projectIntro[i].classList.add('animated', 'fadeInUp');
  });
}

for (let i = 0; i < projectIntro.length; i++) {
  projectPhoto[i].addEventListener('mouseout', function () {
    projectIntro[i].classList.add('animated', 'fadeOutDown');
    projectIntro[i].classList.remove('project-intro-hover');
    projectIntro[i].classList.remove('animated');
    projectIntro[i].classList.add('slideInUp');
  });
}