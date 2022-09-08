const body = document.querySelector('#portfolio');
const works = [{
  projectName: 'Project name goes here',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  featuredImage: './popup/workOne.svg',
  projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveVersion: 'https://nahnahaj.github.io/portfolio/',
  source: 'https://github.com/NahnahAJ',
},
{
  projectName: 'Project name goes here',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  featuredImage: './popup/workOne.svg',
  projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveVersion: 'https://nahnahaj.github.io/portfolio/',
  source: 'https://github.com/NahnahAJ',
},
{
  projectName: 'Project name goes here',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  featuredImage: './popup/workOne.svg',
  projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveVersion: 'https://nahnahaj.github.io/portfolio/',
  source: 'https://github.com/NahnahAJ',
},
{
  projectName: 'Project name goes here',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  featuredImage: './popup/workOne.svg',
  projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveVersion: 'https://nahnahaj.github.io/portfolio/',
  source: 'https://github.com/NahnahAJ',
}];

const div = document.createElement('div');
div.className = 'popUp-window';
div.innerHTML = `<div class="head-popup"><h1 class="popup-projectName">${works[0].projectName}</h1><button type="submit" class="close-btn">&times;</button></div>
<ul><li class="popup-lang">${works[0].technologies[0]}</li><li class="popup-lang">${works[0].technologies[1]}</li><li class="popup-lang">${works[0].technologies[2]}</li></ul>
<img class="workOne" alt="first project" src="${works[0].featuredImage}"><p class="popUp-tag">${works[0].projectDescription}</p>
<button class="popUp-btn">See Live<img class="p-icons" alt="github-icon" src="./popup/ic_link.svg"></button>
<button class="popUp-btn">See source<img class="p-icons" alt="github-icon"src="./popup/ic_github_white.svg"></button>
<button class="prev-btn">&#8592;Previous project</button><button class="next-btn">Next project &#8594;</button>`;
body.append(div);

const overlay = document.createElement('div');
overlay.className = 'overlay';
body.appendChild(overlay);

const portfolioBtn = document.querySelectorAll('.projects-btn');
const overlayNew = document.querySelector('.overlay');
const modalContainer = document.querySelector('.popUp-window');

for (let i = 0; i < portfolioBtn.length; i += 1) {
  portfolioBtn[i].addEventListener('click', () => {
    modalContainer.classList.add('active');
    overlayNew.classList.add('active')
  });
}

const closeModalButton = document.querySelectorAll('.close-btn');
for (let i = 0; i < closeModalButton.length; i += 1) {
  closeModalButton[i].addEventListener('click', ()=> {
    modalContainer.classList.remove('active');
    overlayNew.classList.remove('active')
  });
}
