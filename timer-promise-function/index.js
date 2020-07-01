function timer(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time);
	});
}

function ask(options) {
	return new Promise(function(resolve) {
		const popup = document.createElement('form');
		popup.classList.add('open');
		console.log(popup);
		popup.insertAdjacentHTML(
			'afterbegin',
			`<fieldset>
         <label>${options.title}</label>
         <input type="text" name="input">
         <button type="submit"></button>
        </fieldset>
      `
		);
	});
}
