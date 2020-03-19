// Grabbing elements needed
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClicks(event) {
	// Hide all tabPanels
	tabPanels.forEach((panel) => {
		panel.hidden = true;
	});
	// Mark all tabs as unselected
	tabButtons.forEach((tab) => {
		tab.setAttribute('aria-selected', false);
	});
	// Mark the clicked tab as selected
	event.currentTarget.setAttribute('aria-selected', true);
	// Find the associated tab panel and show it
	const { id } = event.currentTarget;
	// Find the panel where the aria-labelledby is equal to the associated button's 'id'
	const tabPanel = tabPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);
	tabPanel.hidden = false;
}

// Running the events on the button tab clicks
tabButtons.forEach((button) => button.addEventListener('click', handleTabClicks));
