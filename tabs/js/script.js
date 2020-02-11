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
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));