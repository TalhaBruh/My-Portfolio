const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/* Pop up menu */

const projectList = [
  {
    title: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageURL: 'assets/images/desktop-img-1.png',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    tags: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
  },
  {
    title: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imageURL: 'assets/images/desktop-img2.png',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    tags: ['html', 'css', 'javascript', 'github'],
  },
  {
    title: 'Facebook 360',
    description:
      'AExploring the future of media in Facebook`s first Virtual Realityapp; a place to discover and enjoy 360 photos and videos onGear VR',
    imageURL: 'assets/images/desktop-img3.png',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    tags: ['html', 'css', 'javascript'],
  },
  {
    title: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imageURL: 'assets/images/desktop-img4.png',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    tags: ['html', 'css', 'javascript'],
  },
];
const pageBody = document.querySelector('body');
const submitBtn = document.querySelectorAll('.submit-btn');

for (let i = 0; i < projectList.length; i += 1) {
  submitBtn[i].addEventListener('click', () => {
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup_container';
    popupContainer.innerHTML = `
    <div class='popup'>
      <div class='popup_head'>
        <h2>${projectList[i].title}</h2>
        <span class='closeBtn' >X</span>
      </div>
      <div class="popup_body">
        <div>${projectList[i].company} . ${projectList[i].role} . ${
  projectList[i].year
} </div>
        <img src=${projectList[i].imageURL} >
        <div class="popup_details">
          <p>${projectList[i].description}</p>
          <div class='popup_tags_links'>
            <div class='popup_tags'>
              ${projectList[i].tags
    .map((tech) => ` <span class='tech'> ${tech} </span> `)
    .join(' ')}
            </div>
            <div>
              <button class='popup_btn'>See Live <img src="assets/images/Icon.png" ></button> 
              <button class='popup_btn'>See Source <img src="assets/images/github.svg"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    pageBody.prepend(popupContainer);
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', () => {
      pageBody.removeChild(popupContainer);
    });
  });
}

/* Form Validation */

const email = document.getElementById('email');
const form = document.getElementById('input');
const displayMsg = document.getElementById('form-message-error');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-message');
    displayMsg.textContent = 'Your email address should be in lowercase';
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});

/* Local Storage */
let userDetails = {
  name: '',
  email: '',
  message: '',
};

if (localStorage.getItem('savedDetails') !== null) {
  const finalDetails = localStorage.getItem('savedDetails');
  userDetails = JSON.parse(finalDetails);
}

const input = document.querySelectorAll('input, textarea');
input.forEach((item) => {
  item.value = userDetails[item.name];
  item.addEventListener('input', (e) => {
    userDetails[e.target.name] = e.target.value;

    const userData = JSON.stringify(userDetails);
    localStorage.setItem('savedDetails', userData);
  });
});
