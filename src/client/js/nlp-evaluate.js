async function evaluate(text) {
	const obj = { value: text };
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj),
	};
	// const port = process.env.PORT || 8000;
	// console.log(port);
	// console.log(data);
	/// update UI
	try {
		const response = await fetch(`nlp`, options);
		const data = await response.json();
		Client.updateUI(data);
	} catch (error) {
		console.log(error);
	}
}

export { evaluate };
