import logo from '../images/logo_tra.png';
import bookIcon from '../images/book.png';
import computerIcon from '../images/computer.png';
import reportIcon from '../images/report.png';
import searchIcon from '../images/search.png';

const cards = document.querySelectorAll('.card-icon');
Array.from(cards).forEach((card) => {
	switch (card.parentNode.getAttribute('href')) {
		case 'Concept':
			card.innerHTML = `<img src="${bookIcon}">`;
			break;
		case 'Importance':
			card.innerHTML = `<img src="${computerIcon}">`;
			break;
		case 'Analysis':
			card.innerHTML = `<img src="${searchIcon}">`;
			break;
		case 'Reference':
			card.innerHTML = `<img src="${reportIcon}">`;
			break;
	}
});

function createLogo(logo) {
	const img = document.createElement('img');
	img.src = logo;
	img.className = 'logo-img';
	const logoContainer = document.querySelector('.logo');
	logoContainer.appendChild(img);
	console.log(img);
}
createLogo(logo);
export { createLogo };
