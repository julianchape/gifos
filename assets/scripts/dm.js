const switchTheme = () => {
	document.body.classList.toggle('darkMode');
	if (document.body.classList.contains('darkMode')) {
		localStorage.setItem('dark-mode', true);
	} else {
		localStorage.setItem('dark-mode', false);
	}
};

$switchThemeBtn.addEventListener('click', switchTheme);

const setLocalStorageTheme = () => {
	if (localStorage.getItem('dark-mode') == 'true') {
		document.body.classList.add('darkMode');
		$switchThemeBtn.textContent = 'Modo Diurno';
		$logo.src = 'assets/images/logo-mobile-modo-noct.svg';
		$crearGifBtn.src = 'assets/images/CTA-crar-gifo-modo-noc.svg';
		$burgerMenu.src = 'assets/images/burger-modo-noct.svg';
		$navbarSearchBtn.src = 'assets/images/icon-search-mod-noc.svg';
		$navbarSearchCloseBtn.src = 'assets/images/close-modo-noct.svg';
		$searchBtn.src = 'assets/images/icon-search-mod-noc.svg';
		$searchCloseBtn.src = 'assets/images/close-modo-noct.svg';
		$previousBtn.src = 'assets/images/button-slider-left-md-noct.svg';
		$nextBtn.src = 'assets/images/button-slider-right-md-noct.svg';
		$camera.src = 'assets/images/camara-modo-noc.svg';
		$celuloide.src = 'assets/images/pelicula-modo-noc.svg';
	} else {
		document.body.classList.remove('darkMode');
		$switchThemeBtn.textContent = 'Modo Nocturno';
	}
};

setLocalStorageTheme();