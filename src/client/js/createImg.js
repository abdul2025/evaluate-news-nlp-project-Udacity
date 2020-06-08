import logo from '../images/logo_tra.png';
import bookIcon from '../images/book.png';
import computerIcon from '../images/computer.png';
import reportIcon from '../images/report.png';
import searchIcon from '../images/search.png';
import conceptImg from '../images/sentiment_analysis.png';
const logoContainer = document.querySelector('.logo');
const conceptImgContainer = document.querySelector('.img-concept');

function createIcons() {
	const cards = document.querySelectorAll('.card-icon');
	Array.from(cards).forEach((card, index) => {
		index === 0
			? (card.innerHTML = `<img src="${bookIcon}">`)
			: (card.innerHTML = `<img src="${searchIcon}">`);
	});
}

function createImg(image, cont) {
	const img = document.createElement('img');
	img.src = image;
	cont.appendChild(img);
	createIcons();
}
createImg(logo, logoContainer);
createImg(conceptImg, conceptImgContainer);
export { createImg };
