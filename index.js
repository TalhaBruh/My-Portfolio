const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* Pop up menu */

const projectList = [
  {
    title: "AI Blend VR",
    description:
      "AI-VR Metahuman integrated in Unreal Engine through which user can conduct his mood therapy while customizing the appearance, response length and Conversation starting mood. The metahuman will have a real-time response within seconds and will use gesture movement and lip synchronization for a realistic experience in VR.",
    imageURL: "assets/images/aiblendvr2.png",
    company: "Moshpit Studios",
    role: "Front End Development",
    year: "2024",
    tags: ["React", "NextJS", "MongodbAtlas", "Github", "Tailwind"],
    liveLink: "https://github.com/TalhaBruh/Mood-Therapy-ChatBot-NextJS-using-GPT3.5",
    sourceLink: "https://github.com/TalhaBruh/Mood-Therapy-ChatBot-NextJS-using-GPT3.5",
  },
  {
    title: "Bliss Beans",
    description:
      "A gratitude app for children where they can tell grandma about daily done good deed in a form of bean and write about it with picture & make a diary of it.",
    imageURL: "assets/images/blissbeans.png",
    company: "Upwork Project",
    role: "Full cross platform development",
    year: "2024",
    tags: ["React Native", "Tailwind", "Github", "Flutter"],
    liveLink: "https://github.com/TalhaBruh/React-Native-Gratitude-App",
    sourceLink: "https://github.com/TalhaBruh/React-Native-Gratitude-App",
  },
  {
    title: "Cinephile Cinema Project",
    description:
      "Cinephile Cinema is a web application built with the MEN (MongoDB, Express, Node.js) stack, designed for movie enthusiasts to create and manage their favorite movie lists, and stay updated with the latest movie news",
    imageURL: "assets/images/cinephile.png",
    company: "Dummy Project",
    role: "Full Stack Dev",
    year: "2023",
    tags: ["HTML", "CSS", "JS", "Node", "Express", "Mongodb"],
    liveLink: "https://github.com/TalhaBruh/Cinephile-Cinema-Project",
    sourceLink: "https://github.com/TalhaBruh/Cinephile-Cinema-Project",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio for you to know me better.",
    imageURL: "assets/images/portfolio.png",
    company: "Github",
    role: "Developer",
    year: "2022",
    tags: ["HTML", "CSS", "JS"],
    liveLink: "https://github.com/TalhaBruh/My-Portfolio",
    sourceLink: "https://github.com/TalhaBruh/My-Portfolio",
  },
];

const pageBody = document.querySelector("body");
const submitBtn = document.querySelectorAll(".submit-btn");

for (let i = 0; i < projectList.length; i += 1) {
  submitBtn[i].addEventListener("click", () => {
    const popupContainer = document.createElement("div");
    popupContainer.className = "popup_container";
    popupContainer.innerHTML = `
      <div class='popup'>
        <div class='popup_head'>
          <h2>${projectList[i].title}</h2>
          <span class='closeBtn'>X</span>
        </div>
        <div class="popup_body">
          <div>${projectList[i].company} . ${projectList[i].role} . ${projectList[i].year}</div>
          <img src=${projectList[i].imageURL} >
          <div class="popup_details">
            <p>${projectList[i].description}</p>
            <div class='popup_tags_links'>
              <div class='popup_tags'>
                ${projectList[i].tags.map((tech) => `<span class='tech'> ${tech} </span>`).join(" ")}
              </div>
              <div>
                <a href="${projectList[i].liveLink}" target="_blank">
                  <button class='popup_btn'>
                    See Live <img src="assets/images/Icon.png" alt="Live Icon">
                  </button>
                </a>
                <a href="${projectList[i].sourceLink}" target="_blank">
                  <button class='popup_btn'>
                    See Source <img src="assets/images/github.svg" alt="GitHub Icon">
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    pageBody.prepend(popupContainer);
    const closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      pageBody.removeChild(popupContainer);
    });
  });
}


/* Form Validation */

const email = document.getElementById("email");
const form = document.getElementById("input");
const displayMsg = document.getElementById("form-message-error");

form.addEventListener("submit", (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = "visible";
    displayMsg.classList.add("error-message");
    displayMsg.textContent = "Your email address should be in lowercase";
  } else {
    displayMsg.style.visibility = "hidden";
  }
});

/* Local Storage */
let userDetails = {
  name: "",
  email: "",
  message: "",
};

if (localStorage.getItem("savedDetails") !== null) {
  const finalDetails = localStorage.getItem("savedDetails");
  userDetails = JSON.parse(finalDetails);
}

const input = document.querySelectorAll("input, textarea");
input.forEach((item) => {
  item.value = userDetails[item.name];
  item.addEventListener("input", (e) => {
    userDetails[e.target.name] = e.target.value;

    const userData = JSON.stringify(userDetails);
    localStorage.setItem("savedDetails", userData);
  });
});
