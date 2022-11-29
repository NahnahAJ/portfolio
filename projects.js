const projectSection = document.querySelector(".projectsContainer");
const popUpWindow = document.querySelector(".popUps");
const overlay = document.querySelector(".overlay");
const works = [
  {
    id: 1,
    projectName: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "Javascript"],
    featuredImage: "./works/work1.svg",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    liveVersion: "https://nahnahaj.github.io/portfolio/",
    source: "https://github.com/NahnahAJ",
  },
  {
    id: 2,
    projectName: "Project name goes",
    technologies: ["HTML/CSS", "Ruby on Rails", "Javascript"],
    featuredImage: "./works/work2.svg",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    liveVersion: "https://nahnahaj.github.io/portfolio/",
    source: "https://github.com/NahnahAJ",
  },
  {
    id: 3,
    projectName: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "Javascript"],
    featuredImage: "./works/work3.svg",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    liveVersion: "https://nahnahaj.github.io/portfolio/",
    source: "https://github.com/NahnahAJ",
  },
  {
    id: 4,
    projectName: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "Javascript"],
    featuredImage: "./works/work4.svg",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    liveVersion: "https://nahnahaj.github.io/portfolio/",
    source: "https://github.com/NahnahAJ",
  },
  {
    id: 5,
    projectName: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "Javascript"],
    featuredImage: "./works/work5.svg",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    liveVersion: "https://nahnahaj.github.io/portfolio/",
    source: "https://github.com/NahnahAJ",
  },
  {
    id: 6,
    projectName: "Project name goes here",
    technologies: ["HTML/CSS", "Ruby on Rails", "Javascript"],
    featuredImage: "./works/work6.svg",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    liveVersion: "https://nahnahaj.github.io/portfolio/",
    source: "https://github.com/NahnahAJ",
  },
];

const allProjects = document.createElement("div");
allProjects.className = "everyProject";
let worksCard = "";
works.forEach((work) => {
  worksCard = `${worksCard}<div class=mainProjectContainer>
    <img class src=${work.featuredImage} alt="works">
    <p class="project-name">${work.projectName}</p>
<p class="desktop-name-2">${work.projectName}</p>
<ul>
<li class="blue-bg">${work.technologies[0]}</li>
<li class="blue-bg">${work.technologies[1]}</li>
<li class="blue-bg">${work.technologies[2]}</li>
</ul>
<button class="projects-btn" id=${work.id}>See this Project<img class="desktop-btn-icon" src="icons/ic_arrow_right.svg"  alt="arrow"><img class="arrow-icon" src="icons/Union.svg" alt="arrow">
</button>
    </div>
    `;
  allProjects.innerHTML = worksCard;
  projectSection.append(allProjects);
  const buttonIds = document.querySelectorAll(".projects-btn");
  buttonIds.forEach((id) => {
    id.addEventListener("click", (e) => {
      modalCreator(e.target.id);
    });
  });
});

const modalCreator = (id) => {
  const allPopups = document.createElement("div");
  allPopups.className = "everyPopup";
  let popUpsCard = "";
  popUpsCard = `<div class="mainPopupContainer overlay">
  <button class="close-modal">&times;</button>
      <img class src=${works[id - 1].featuredImage} alt="works">
      <p>${works[id - 1].projectName}</p>
  </div>
      `;
  allPopups.innerHTML = popUpsCard;
  popUpWindow.append(allPopups);

  const closebtn = document.querySelectorAll(".close-modal");
  const modal = document.querySelector(".mainPopupContainer");
  closebtn.forEach((button) => {
    button.addEventListener('click', () => {
      allPopups.classList.add('hidden');
    })    
  })
};


