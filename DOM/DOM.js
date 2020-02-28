// Creating DOM element examples
const div = document.createElement('div');
div.innerHTML = `
<h1 class="main-heading">innerHTML heading</h1>
<p>innerHTML paragraph</p>
`;
document.body.appendChild(div);
div.lastElementChild.textContent = 'Updating text with the lastElementChild property';

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

// Baseball Cards DOM Example
function createBaseballCard(playerName, position, bats) {
  const html = `
  <p>${playerName}</p>
  <p>${position}</p>
  <p>${bats}</p>
  `;
  return html;
}

// Make a baseball cards div to store the cards in
const baseballCardsDiv = document.createElement('div');
baseballCardsDiv.classList.add('baseball-cards');
document.body.appendChild(baseballCardsDiv);

// Adding cards to the baseballCardsDiv
let cardsHTML = createBaseballCard('Mookie Betts', 'Right Field', 'Bats: Right');
cardsHTML += createBaseballCard('Mike Trout', 'Center Field', 'Bats: Right');
cardsHTML += createBaseballCard('Xander Bogaerts', 'Shortstop', 'Bats: Right');
cardsHTML += createBaseballCard('Rafael Devers', 'Third Base', 'Bats: Left');

baseballCardsDiv.appendChild(cardsHTML);






