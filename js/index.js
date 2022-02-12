// Loader
window.onload = () => {
	const $charging = document.querySelector('.charging');

	$charging.classList.add('hidden');

	if ($charging.classList.contains('hidden')) $charging.classList.add('none');
};
