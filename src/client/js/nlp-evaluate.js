async function evaluate(text) {
	console.log(text);
	console.log(`This is from evaluation function ${text}`);
	const obj = { name: 'ali', value: text };
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj),
	};
	const response = await fetch('/nlp', options);
	const data = await response.json();
	console.log(data);
}

export { evaluate };
