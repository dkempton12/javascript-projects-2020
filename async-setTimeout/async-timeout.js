function changeBackgroundColor() {
	document.body.style.background = 'lightseagreen';
}

// Here, JS goes through and sees that it needs to wait 2 seconds to run the callback
// In the meantime, the two hello world messages below are logged
// This is an example of the asynchronous nature of JS
console.log('Hello World');
setTimeout(changeBackgroundColor, 2000);
console.log(`Hello again, World!`);
