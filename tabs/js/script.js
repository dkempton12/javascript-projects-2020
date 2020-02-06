const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role=tab]');
// creating an array of the tabs to loop through
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
}