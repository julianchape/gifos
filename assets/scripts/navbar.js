const displayBurgerMenu = () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		if ($navbarList.classList.contains('hiddenMenu')) {
			$navbarList.classList.remove('hiddenMenu');
			$burgerMenu.src = 'assets/images/close-modo-noct.svg';
		} else {
			$navbarList.classList.add('hiddenMenu');
			$burgerMenu.src = 'assets/images/burger-modo-noct.svg';
		}
	} else {
		if ($navbarList.classList.contains('hiddenMenu')) {
			$navbarList.classList.remove('hiddenMenu');
			$burgerMenu.src = 'assets/images/close.svg';
		} else {
			$navbarList.classList.add('hiddenMenu');
			$burgerMenu.src = 'assets/images/burger.svg';
		}
	}
};

$burgerMenu.addEventListener('click', displayBurgerMenu);
$favoritosMenu.addEventListener('click', displayBurgerMenu);

$crearGifBtn.addEventListener('click', () => {
	$crearGifBtn.src = 'assets/images/CTA-crear-gifo-active.svg';
});

$crearGifBtn.addEventListener('mouseover', () => {
	$crearGifBtn.src = 'assets/images/CTA-crear-gifo-hover.svg';
});

$crearGifBtn.addEventListener('mouseout', () => {
	$crearGifBtn.src = 'assets/images/button-crear-gifo.svg';
});

function stickyNav() {
	if (document.documentElement.scrollTop > 600) {
		if (window.innerWidth < 1024) {
			$navbarSearchContainer.classList.add('hiddenSearchBar');
		} else {
			$navbarSearchContainer.classList.remove('hiddenSearchBar');
			$headerContainer.style.boxShadow =
				'0 9px 8px -10px rgba(148,147,147,0.9)';
		}
	} else {
		$navbarSearchContainer.classList.add('hiddenSearchBar');
		$headerContainer.style.boxShadow = 'none';
	}
}

window.addEventListener('scroll', stickyNav);

const displayCreateGifSection = (event) => {
	event.preventDefault();
	$createGifSection.classList.remove('hidden');
	$heroSection.classList.add('hidden');
	$favSection.classList.add('hidden');
	$trendingSection.classList.add('hidden');
	$misGifosSection.classList.add('hidden');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};


const displayMainSection = (event) => {
	event.preventDefault();
	$heroSection.classList.remove('hidden');
	$misGifosSection.classList.add('hidden');
	$favSection.classList.add('hidden');
	$createGifSection.classList.add('hidden');
	$trendingSection.classList.remove('hidden');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

$crearGifosMenu.addEventListener('click', displayCreateGifSection);

$logoSection.addEventListener('click', displayMainSection);