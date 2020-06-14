async function evaluate(text) {
	const obj = { value: text };
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj),
	};
	const response = await fetch('http://localhost:8081/nlp', options);
	const data = await response.json();
	// console.log(data);
	/// update UI
	try {
		Client.updateUI(data);
	} catch (error) {
		console.log(error);
	}
}

const obj = {
	value: 'this is a test for api response, using the data for Jest test',
};

const options = {
	method: 'POST',
	credentials: 'same-origin',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(obj),
};
const evaluateTest = async (options) => {
	const response = await fetch('http://localhost:8081/nlp', options);
	const data = await response.json();
	try {
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { evaluate };
