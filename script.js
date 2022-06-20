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
