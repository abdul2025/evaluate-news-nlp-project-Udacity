import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { evaluate } from './js/nlp-evaluate';

// console.log(checkForName);

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/wrapper.scss';
import logo from './images/logo_transparent.png';
console.log(logo);

function createLogo(logo) {
	const img = document.createElement('img');
	img.src = logo;
	img.className = 'logo-img';
	const logoContainer = document.querySelector('.logo');
	logoContainer.appendChild(img);
	console.log(img);
}
createLogo(logo);

console.log('CHANGE!!');

export { checkForName, handleSubmit, evaluate };
