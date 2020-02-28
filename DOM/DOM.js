// Creating DOM element examples
const div = document.createElement('div');
div.innerHTML = `
<h1 class="main-heading">innerHTML heading</h1>
<p>innerHTML paragraph</p>
`;
document.body.appendChild(div);

const secondDiv = document.createElement('div');
secondDiv.style.width = '300';
secondDiv.style.height = '300';
secondDiv.style.background = 'orange';