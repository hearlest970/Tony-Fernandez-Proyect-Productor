// Loader
window.onload = () => {
	const $charging = document.querySelector('.charging');

	$charging.classList.add('hidden');

	if ($charging.classList.contains('hidden')) $charging.classList.add('none');
};

// hamburger menu
document.addEventListener('click', (event) => {
	if (event.target.matches('#icon__home')) {
		document.querySelector('.header__nav-container').classList.toggle('show__menu')
	}

	if (event.target.matches('.header__nav-container a')) {
		document.querySelector('.header__nav-container').classList.remove('show__menu')
	}
});