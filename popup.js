// const body = document.querySelector("#portfolio");
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

let worksCard = "";
works.forEach((eachWork) => {
  worksCard = `${worksCard}<img class ="workOne"src=${eachWork.featuredImage} alt="works">
<div class="background-card">
<p class="project-name">${eachWork.projectName}</p>
<p class="desktop-name-2">${eachWork.projectName}</p>
<ul>
<li class="blue-bg">${eachWork.technologies[0]}</li>
<li class="blue-bg">${eachWork.technologies[1]}</li>
<li class="blue-bg">${eachWork.technologies[2]}</li>
</ul>
<div class="btn-container">
<div>
<button class="projects-btn" id=${eachWork.id}>See this Project<img class="desktop-btn-icon" src="icons/ic_arrow_right.svg"  alt="arrow"><img class="arrow-icon" src="icons/Union.svg" alt="arrow">
</button>
</div>
</div>
</div>`;
  // const modalContainer = document.getElementById(`${eachWork.id}`);
  // console.log(modalContainer);
});

const dynamicSection = document.createElement("div");
dynamicSection.className = "workscard";
dynamicSection.innerHTML = worksCard;
body.appendChild(dynamicSection);

let popUpWindowCard = "";
const popUpWindow = document.createElement("div");
popUpWindow.className = "popUp-window";
works.forEach((work) => {
  popUpWindowCard = `<div class="head-popup" id=${work.id}>
  <h1 class="popup-projectName">${work.projectName}</h1>
  <button type="submit" class="close-btn">&times;</button>
  <ul>
  <li class="popup-lang">${work.technologies[0]}</li>
  <li class="popup-lang">${work.technologies[1]}</li>
  <li class="popup-lang">${work.technologies[2]}</li>
  </ul>
<img class="workOne" alt="first project" src=${work.featuredImage}><p class="popUp-tag">${work.projectDescription}</p>
<button class="popUp-btn">See Live<img class="p-icons" alt="github-icon" src="./popup/ic_link.svg"></button>
<button class="popUp-btn">See source<img class="p-icons" alt="github-icon"src="./popup/ic_github_white.svg"></button>
<button class="prev-btn">&#8592;Previous project</button><button class="next-btn">Next project &#8594;</button>
  </div>`;
  const modalContainer = document.getElementById(`${work.id}`);
  console.log(modalContainer);
  modalContainer.addEventListener('click', () => {
    console.log(work.id);
        popUpWindow.classList.add('active');
    overlayNew.classList.add('active');
  })
});
popUpWindow.innerHTML = popUpWindowCard;
body.append(popUpWindow);

const overlay = document.createElement("div");
overlay.className = "overlay";
body.appendChild(overlay);

const portfolioBtn = document.querySelectorAll(".projects-btn");
const overlayNew = document.querySelector(".overlay");
const modalContainer = document.getElementById(works.id);

for (let i = 0; i < portfolioBtn.length; i += 1) {
  if (portfolioBtn[i].id) {
     portfolioBtn[i].addEventListener('click', () => {
    modalContainer.classList.add('active');
    overlayNew.classList.add('active');
  });
  }
}

const closeModalButton = document.querySelectorAll('.close-btn');
for (let i = 0; i < closeModalButton.length; i += 1) {
  closeModalButton[i].addEventListener('click', () => {
    modalContainer.classList.remove('active');
    overlayNew.classList.remove('active');
  });
}
