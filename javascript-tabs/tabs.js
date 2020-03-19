// Grabbing elements needed
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClicks(e) {
	console.log(e.currentTarget);
	// Hide all tabPanels
	tabPanels.forEach((panel) => {
		panel.hidden = true;
	});
	// Mark all tabs as unselected
	tabButtons.forEach((tab) => {
		tab.setAttribute('aria-selected', false);
	});
	// Mark the clicked tab as selected
	event.currentTarget('aria-selected', true);
}

// Running the events on the button tab clicks
tabButtons.forEach((button) => button.addEventListener('click', handleTabClicks));
