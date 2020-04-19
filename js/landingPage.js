// Project Hover Animation in TabletMobile
const projectsMT = document.querySelector('.section3-mobileTablet .projects')
const projectPhotoMT = projectsMT.querySelectorAll('.project-photo');
const projectIntroMT = projectsMT.querySelectorAll('.project-intro');

for (let i = 0; i < projectIntroMT.length; i++) {
  projectPhotoMT[i].addEventListener('mouseover', function () {
    projectIntroMT[i].classList.remove('fadeInUp');
    projectIntroMT[i].classList.remove('fadeOutDown');
    projectIntroMT[i].classList.add('project-intro-hover');
    projectIntroMT[i].classList.add('animated', 'fadeInUp');
  });
}

for (let i = 0; i < projectIntroMT.length; i++) {
  projectPhotoMT[i].addEventListener('mouseout', function () {
    projectIntroMT[i].classList.add('animated', 'fadeOutDown');
    projectIntroMT[i].classList.remove('project-intro-hover');
    projectIntroMT[i].classList.remove('animated');
  });
}

// Project Hover Animation in Desktop
const projectsD = document.querySelector('.section3-desktop .projects')
const projectPhotoD = projectsD.querySelectorAll('.project-photo');
const projectIntroD = projectsD.querySelectorAll('.project-intro');

for (let i = 0; i < projectIntroD.length; i++) {
  projectPhotoD[i].addEventListener('mouseover', function () {
    projectIntroD[i].classList.remove('fadeInUp');
    projectIntroD[i].classList.remove('fadeOutDown');
    projectIntroD[i].classList.add('project-intro-hover');
    projectIntroD[i].classList.add('animated', 'fadeInUp');
  });
}

for (let i = 0; i < projectIntroD.length; i++) {
  projectPhotoD[i].addEventListener('mouseout', function () {
    projectIntroD[i].classList.add('animated', 'fadeOutDown');
    projectIntroD[i].classList.remove('project-intro-hover');
    projectIntroD[i].classList.remove('animated');
  });
}