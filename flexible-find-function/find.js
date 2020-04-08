const celtics = [
	{ name: 'Kemba Walker', position: 'Point Guard', jerseyNumber: '8' },
	{ name: 'Jayson Tatum', position: 'Forward', jerseyNumber: '0' },
	{ name: 'Jaylen Brown', position: 'Guard', jerseyNumber: '8' },
	{ name: 'Gordon Hayward', position: 'Forward', jerseyNumber: '20' },
	{ name: 'Marcus Smart', position: 'Guard', jerseyNumber: '36' },
	{ name: 'Enes Kanter', position: 'Forward', jerseyNumber: '11' },
	{ name: 'Daniel Theis', position: 'Center', jerseyNumber: '27' }
];

function findPlayer(prop, propValue) {
	return function(player) {
		return (player[prop] = propValue);
	};
}
