function handleSubmit(event) {
	event.preventDefault();
	console.log('::: Form Submitted :::');
	let formText = document.getElementById('text').value;

	// check if the text meet the require length
	if (formText.length > 15) {
		Client.evaluate(formText); // send the text to evaluate Function
	} else {
		const erroMass = document.querySelector('.error-message');
		erroMass.style.display = 'block';
	}
}

export { handleSubmit };
