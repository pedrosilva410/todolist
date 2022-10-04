document.getElementById('addItem').addEventListener('click', () => addItem());


function addItem() {
	const newLi = document.createElement('li');
	const newP = document.createElement('p');
	const newButton = document.createElement('button');
	const list = document.getElementById('list');
	const input = document.getElementById('userInput').value;

	newP.innerHTML = input;
	newButton.innerHTML = 'x';

	document.getElementById('userInput').value = '';

	newButton.addEventListener('click', () => newLi.remove());

	newLi.classList.add('listItem');
	newP.classList.add('itemText');
	newButton.classList.add('removeItem');

	newLi.append(newP);
	newLi.append(newButton);
	list.append(newLi);
}
