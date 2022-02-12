// Loader
window.onload = () => {
	const $charging = document.querySelector('.charging');

	$charging.classList.add('hidden');

	if ($charging.classList.contains('hidden')) $charging.classList.add('none');
};

document.addEventListener('click', (event) => {
	const $btnMenu = document.querySelector('#icon__home'),
				$navbar = document.querySelector('.header__nav-container');

	if (event.target === $btnMenu) {
		$navbar.classList.toggle('show__menu');
	}

})