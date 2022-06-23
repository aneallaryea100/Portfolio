const hambx = document.querySelector('.hambx');
const close = document.querySelector('.close');
const nav = document.querySelector('.navvme');
const navLink = document.querySelectorAll('.navlinks');
hambx.addEventListener('click', () => {
  nav.classList.add('active');
});

close.addEventListener('click', () => {
  nav.classList.remove('active');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  nav.classList.remove('active');
}));

const data = [
  {
    dataId: 'dd1',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd2',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd3',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd4',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd5',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/snapbig.png',
    featuredImgSmall: 'assets/image/firzz.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd6',
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
];

const cardSecz = document.querySelector('.cardSec');

// loop data object
for (let index = 0; index < data.length; index += 1) {
  const dataIndex = data[index];
  // container
  const divContain = document.createElement('div');
  divContain.setAttribute('class', 'card-works');
  // head text
  const nameHead = document.createElement('h5');
  nameHead.setAttribute('class', 'ghg');
  const nameText = document.createTextNode(dataIndex.name);
  nameHead.appendChild(nameText);
  divContain.appendChild(nameHead);
  // description
  const tagDescribe = document.createElement('p');
  tagDescribe.setAttribute('class', 'ddestxts');
  tagDescribe.setAttribute('id', 'farx');
  const textDescribe = document.createTextNode(dataIndex.description);
  tagDescribe.appendChild(textDescribe);
  divContain.appendChild(textDescribe);
  // technologies
  const techList = document.createElement('ul');
  techList.setAttribute('class', 'btn-hold');
  const techEL = dataIndex.technologies;
  techEL.forEach((el) => {
    const elLi = document.createElement('li');
    const elText = document.createTextNode(el);
    elLi.appendChild(elText);
    techList.appendChild(elLi);
    divContain.appendChild(techList);
  });
  // button
  const modalBtns = document.createElement('button');
  modalBtns.setAttribute('class', 'esdd');
  const textBtnx = document.createTextNode('See Project');
  modalBtns.appendChild(textBtnx);
  divContain.appendChild(modalBtns);
  // add div to card section
  cardSecz.appendChild(divContain);
}

/** ****** email validation ********* */
const form = document.getElementById('form');

form.addEventListener('submit', (element) => {
  element.preventDefault();
  
  const email = document.getElementById('mail');
  const errorMessage = document.querySelector('.error');
  const emailValue = email.value;

  if (emailValue !== emailValue.toLowerCase()) {
    errorMessage.innerText = 'Email must be lowercase***';
  } else {
    form.submit();
    errorMessage.innerText = '';
  }
});

// local storage
const textz = document.getElementById('name');
const textArea = document.getElementById('msg');
const mailWays = document.getElementById('mail');
form.addEventListener('input', () => {
  const inputData = {
    Name: textz.value,
    Email: mailWays.value,
    Area: textArea.value,
  };
  const collectData = JSON.stringify(inputData);
  localStorage.setItem('collectData', collectData);
});

function reachData() {
  if (localStorage.getItem('collectData')) {
    const realData = JSON.parse(localStorage.getItem('collectData'));
    textz.value = realData.Name;
    mailWays.value = realData.Email;
    textArea.value = realData.Area;
  }
}

reachData();
