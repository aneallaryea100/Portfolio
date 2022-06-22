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
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups
  }
]
