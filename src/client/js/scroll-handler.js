const sections = Array.from(document.querySelectorAll('section'));
const cards = Array.from(document.querySelectorAll('.card'));
console.log(cards);
function scrollTo() {
	cards.forEach((card, ind) => {
		sections.forEach((section, index) => {
			if (ind === index) {
				section.setAttribute('id', `${section.className}`);
				card.firstElementChild.setAttribute('href', `#${section.className}`);
			}
		});
	});
}
scrollTo();

export { scrollTo, sections, cards };
