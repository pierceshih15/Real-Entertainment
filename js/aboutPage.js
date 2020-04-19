// Teams Hover Animation in ABOUT PAGE - MobileTablet
const teamsMT = document.querySelector('.mobileTablet .teams')
const teamsPhotoMT = teamsMT.querySelectorAll('.team-photo');
const teamsIntroMT = teamsMT.querySelectorAll('.team-intro');

for (let i = 0; i < teamsIntroMT.length; i++) {
  teamsPhotoMT[i].addEventListener('mouseover', function () {
    teamsIntroMT[i].classList.remove('fadeInUp');
    teamsIntroMT[i].classList.remove('fadeOutDown');
    teamsIntroMT[i].classList.add('team-intro-hover');
    teamsIntroMT[i].classList.add('animated', 'fadeInUp');
  });
}

for (let i = 0; i < teamsIntroMT.length; i++) {
  teamsPhotoMT[i].addEventListener('mouseout', function () {
    teamsIntroMT[i].classList.add('animated', 'fadeOutDown');
    teamsIntroMT[i].classList.remove('team-intro-hover');
    teamsIntroMT[i].classList.remove('animated');
  });
}

// Teams Hover Animation in ABOUT PAGE - Desktop
const teamsD = document.querySelector('.desktop .teams')
const teamsPhotoD = teamsD.querySelectorAll('.team-photo');
const teamsIntroD = teamsD.querySelectorAll('.team-intro');

for (let i = 0; i < teamsIntroD.length; i++) {
  teamsPhotoD[i].addEventListener('mouseover', function () {
    teamsIntroD[i].classList.remove('fadeInUp');
    teamsIntroD[i].classList.remove('fadeOutDown');
    teamsIntroD[i].classList.add('team-intro-hover');
    teamsIntroD[i].classList.add('animated', 'fadeInUp');
  });
}

for (let i = 0; i < teamsIntroD.length; i++) {
  teamsPhotoD[i].addEventListener('mouseout', function () {
    teamsIntroD[i].classList.add('animated', 'fadeOutDown');
    teamsIntroD[i].classList.remove('team-intro-hover');
    teamsIntroD[i].classList.remove('animated');
  });
}