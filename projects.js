const projectSection = document.querySelector('.projectsContainer');
const popUpWindow = document.querySelector('.popUps');
const desktopBtns = document.querySelector('.desktop-ProjectsBtn');
const works = [
  {
    id: 1,
    projectName: 'Eco Builders Construction Page',
    technologies: ['HTML5', 'CSS3', 'Javascript'],
    featuredImage: './works/work1.png',
    projectDescription:
      'Building a construction landing page for a company that builds durable and eco-friendly buildings.',
    liveVersion: 'https://nahnahaj.github.io/construction-page/',
    source: 'https://github.com/NahnahAJ/construction-page',
  },
  {
    id: 2,
    projectName: 'To-Do List Web App',
    technologies: ['HTML/CSS', 'Webpack', 'Javascript'],
    featuredImage: './works/work2.png',
    projectDescription:
      'In this project, you will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.',
    liveVersion: 'https://nahnahaj.github.io/To-Do-List/dist/',
    source: 'https://github.com/NahnahAJ/To-Do-List',
  },
  {
    id: 3,
    projectName: 'Leaderboard Web App',
    technologies: ['HTML/CSS', 'API', 'Javascript'],
    featuredImage: './works/work3.png',
    projectDescription:
      'In this project, I will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules.',
    liveVersion: 'https://nahnahaj.github.io/Leaderboard/dist/',
    source: 'https://github.com/NahnahAJ/Leaderboard',
  },
  {
    id: 4,
    projectName: 'Math Magicians Web App',
    technologies: ['React', 'HTML/CSS', 'Javascript'],
    featuredImage: './works/work4.png',
    projectDescription:
      '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    liveVersion: 'https://fancy-empanada-434a74.netlify.app/',
    source: 'https://github.com/NahnahAJ/Math-magicians-Web-App',
  },
  {
    id: 5,
    projectName: 'Space Travelers Hub',
    technologies: ['React', 'Redux', 'Bootstrap', 'SpaceXAPI'],
    featuredImage: './works/work5.png',
    projectDescription:
      'In this task, we use the real live data from the SpaceX API. This web application is for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    liveVersion: 'https://space-travelers-hub-nd.netlify.app/',
    source: 'https://github.com/NahnahAJ/Space-Travelers-Hub',
  },
  {
    id: 6,
    projectName: 'Metrics Web App',
    technologies: ['React', 'Redux', 'Javascript', 'HTML/CSS'],
    featuredImage: './works/work6.png',
    projectDescription:
      'Metrics Web App is a mobile web application to that is used to check a list of metrics (numeric values) that will be created by making use of React and Redux and Data from the ACNH API',
    liveVersion: 'https://vintage-art-collection.netlify.app/',
    source: 'https://github.com/NahnahAJ/Metrics-Web-App',
  },
];

const modalCreator = (id) => {
  const allPopups = document.createElement('div');
  allPopups.className = 'everyPopup';
  let popUpsCard = '';
  popUpsCard = `<div class="mainPopupContainer overlay">
  <button class="close-modal">&times;</button>
  <p class="popUp-title">${works[id - 1].projectName}</p>
  <ul>
<li class="popUp-btn">${works[id - 1].technologies[0]}</li>
<li class="popUp-btn">${works[id - 1].technologies[1]}</li>
<li class="popUp-btn">${works[id - 1].technologies[2]}</li>
</ul>
  <img class="projectImg" src=${works[id - 1].featuredImage} alt="works">
  <p class="popUp-text">${works[id - 1].projectDescription}</p>
  <a class="seeLiveBtn" href=${
  works[id - 1].liveVersion
} target="_blank">See live<i class="fa-sharp fa-solid fa-arrow-up-right-from-square faIcons"></i></a>
  <a class="seeSourceBtn" href=${
  works[id - 1].source
} target="_blank">See source<i class="fa-brands fa-github faIcons"></i></a>
  </div>
      `;
  allPopups.innerHTML = popUpsCard;
  popUpWindow.append(allPopups);

  const closebtn = document.querySelectorAll('.close-modal');
  closebtn.forEach((button) => {
    button.addEventListener('click', () => {
      allPopups.classList.add('hidden');
    });
  });
};

const allProjects = document.createElement('div');
allProjects.className = 'everyProject';
let worksCard = '';
works.forEach((work) => {
  worksCard = `${worksCard}<div class="mainProjectContainer">
    <img class="projectImg" src=${work.featuredImage} alt="works">
    <div class="projectsBackground">
    <p class="project-name">${work.projectName}</p>
<ul>
<li class="blue-bg">${work.technologies[0]}</li>
<li class="blue-bg">${work.technologies[1]}</li>
<li class="blue-bg">${work.technologies[2]}</li>
</ul>
<button class="projects-btn" id=${work.id}>See this Project<i class="fa-solid fa-arrow-right faIcon2"></i></button>
</div>
    </div>
    `;
  allProjects.innerHTML = worksCard;
  projectSection.append(allProjects);
  const buttonIds = document.querySelectorAll('.projects-btn');
  buttonIds.forEach((button) => {
    button.addEventListener('click', (e) => {
      modalCreator(e.target.id);
    });
  });
});
