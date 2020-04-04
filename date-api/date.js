const person = {
	birthday: `January 1, 1988`,
	name: {
		firstName: 'Suzy',
		lastName: 'Greenberg'
	}
};

const birthday = new Date(person.birthday).getTime();
