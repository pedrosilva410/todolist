document.getElementById('addItem').addEventListener('click', addItem);
const list = document.getElementById('list');


function addItem() {
	const newLi = document.createElement('li');
	const newP = document.createElement('p');
	const newButton = document.createElement('button');
	const input = document.getElementById('userInput');

	if (input.value) {
		newP.innerHTML = input.value;
		newButton.innerHTML = 'x';

		input.value = '';

		newButton.addEventListener('click', () => newLi.remove());

		newLi.classList.add('listItem');
		newP.classList.add('itemText');
		newButton.classList.add('removeItem');

		newLi.append(newP);
		newLi.append(newButton);
		list.append(newLi);
	} else {
		alert('Write something, unless you feel like doing nothing :)')
	}
}
