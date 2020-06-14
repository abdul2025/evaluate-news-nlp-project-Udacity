const objDoms = {
	submittedText: document.querySelector('.submitted-text'),
	polarity: document.querySelector('.polarity'),
	polcConf: document.querySelector('.polcConf'),
	inputText: document.getElementById('text'),
};

function updateUI(data) {
	// check if the API response is empty obj
	document.querySelector('.error-message').style.display = 'none';
	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}
	if (!isEmpty(data)) {
		objDoms.submittedText.innerHTML = data.text;
		objDoms.polarity.innerHTML = data.polarity;
		objDoms.polcConf.innerHTML = data.polarity_confidence;
	} else {
		// update UI with Error message
		errUI();
	}
	// clear inputs
	objDoms.inputText.value = ' ';
}

function errUI() {
	// clears input
	objDoms.inputText.value = ' ';
	const apiError = document.createElement('div');
	const analysisPage = document.getElementById('analysis');
	const html = `
     <div class="api-error">
        <h1 class="close">Close</h1>
        <h1>sorry there is a request issue with the nlp(AYLIEN) API </br> please try again later</h1>
    </div>`;
	analysisPage.insertAdjacentHTML('beforeend', html);
	const closeWindow = document.querySelector('.close');
	closeWindow.addEventListener('click', () => {
		document.querySelector('.api-error').style.display = 'none';
	});

	document.querySelector('.api-error').style.display = 'grid';
}

export { updateUI };
