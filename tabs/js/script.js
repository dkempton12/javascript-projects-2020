const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role=tab]');
// creating an array of the tabs to loop through
const tabPanels = Array.from(tabs.querySelectorAll('[role="tab-panel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all button tabs as unselected 
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  })
  // Mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  console.log(tabButtons);

  // Finding the associated tab panel and show it
  const {id} = event.currentTarget;

  // Finding the panel where the aria-labelledby is equal to 'id'
  const findTabPanel = tabPanels.find(panel => panel.getAttribute('aria-labeledby') === 'id');
}
  // Setting the clicked tab panel's hidden property to false
  tabPanels.hidden = false;

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
console.log(tabButtons);