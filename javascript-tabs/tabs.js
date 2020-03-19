// Grabbing elements needed
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

// Running the events on the button tab clicks
tabButtons.forEach((button) => button.addEventListener('click', handleTabClicks));
