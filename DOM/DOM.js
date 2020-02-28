// Creating DOM element examples
const div = document.createElement('div');
div.innerHTML = `
<h1 class="main-heading">innerHTML heading</h1>
<p>innerHTML paragraph</p>
`;
document.body.appendChild(div);

// Creating Second Div
const secondDiv = document.createElement('div');
// Adding CSS to secondDiv
secondDiv.style.width = '150px';
secondDiv.style.height = '150px';
secondDiv.style.background = 'orange';
// Adding .rounded-corners class to secondDiv
secondDiv.classList.add('rounded-corners');
// Append secondDiv
document.body.appendChild(secondDiv);

// Creating an image 
const image = document.createElement('img');
image.src = 'https://picsum.photos/300';
image.alt = 'Random, rotating images from Picsum';
image.classList.add('rounded-corners');
image.style.marginTop = '25px';
// Append image
document.body.appendChild(image);





