function handleSubmit(event) {
	event.preventDefault();
	console.log('::: Form Submitted :::');
	let formText = document.getElementById('text').value;

	// check if the text meet the require length
	const erroMass = document.querySelector('.error-message');
	formText.length === 0 || formText.length < 15
		? (erroMass.style.display = 'block')
		: Client.evaluate(formText); // send the text to evaluate Function
}

export { handleSubmit };
