async function evaluate(text) {
	if (text.length === 0 || text.length < 6)
		return (document.querySelector('.error-message').style.display = 'block');

	const obj = { value: text };
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj),
	};
	const response = await fetch('/nlp', options);
	const data = await response.json();
	// check if the response is empty obj
	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}
	if (!isEmpty(data)) {
		const objDoms = {
			submittedText: document.querySelector('.submitted-text'),
			polarity: document.querySelector('.polarity'),
			polcConf: document.querySelector('.polcConf'),
		};

		function updateUI() {
			document.querySelector('.error-message').style.display = 'none';
			objDoms.submittedText.innerHTML = data.text;
			objDoms.polarity.innerHTML = data.polarity;
			objDoms.polcConf.innerHTML = data.polarity_confidence;
		}
		updateUI();
	} else {
		console.log('api error');
	}
}

export { evaluate };
