function timer(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time);
	});
}

function ask(options) {
	return new Promise(function(resolve) {
		// create popup prompt element
		const popup = document.createElement('form');
		popup.classList.add('popup');
		popup.insertAdjacentHTML(
			'afterbegin',
			`<fieldset>
         <label>${options.title}</label>
         <input type="text' name="input">
         <button type="submit">Submit</button>
        </fieldset>
      `
		);
		popup.addEventListener(
			'click',
			function(event) {
				event.preventDefault();
				resolve(event.target.input.value);
			},
			{ once: true }
		);
	});
}

function askQuestion() {}
