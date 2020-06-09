function handleSubmit(event) {
	event.preventDefault();

	console.log('::: Form Submitted :::');
	// check what text was put into the form field
	let formText = document.getElementById('text').value;
	Client.evaluate(formText);

	// Client.checkForName(formText);
	// fetch('/test')
	// 	.then((res) => res.json())
	// 	.then(function (res) {
	// 		// console.log(res);
	// 		document.getElementById('results').innerHTML = res.message;
	// 	});
}

export { handleSubmit };
