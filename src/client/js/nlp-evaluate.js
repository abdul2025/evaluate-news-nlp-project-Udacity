async function evaluate(text) {
	const obj = { value: text };
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj),
	};

	const response = await fetch('/nlp', options);
	const data = await response.json();
	// console.log(data);
	/// update UI
	try {
		Client.updateUI(data);
	} catch (error) {
		console.log(error);
	}
}

export { evaluate };
