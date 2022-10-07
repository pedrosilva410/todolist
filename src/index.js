document.getElementById('inputArea').addEventListener('submit', addItem);
const list = document.getElementById('list');


function addItem(event) {
	event.preventDefault();
	const newLi = document.createElement('li');
	const newP = document.createElement('p');
	const removeButton = document.createElement('button');
	const editButton = document.createElement('button');
	const input = document.getElementById('userInput');

	if (input.value) {
		newP.innerHTML = input.value;
		removeButton.innerHTML = 'x';
		editButton.innerHTML = '✎';

		removeButton.addEventListener('click', () => newLi.remove());
		editButton.addEventListener('click', () => {
			let edit = prompt('Please enter new text', '')
			if (edit) {
				newP.innerHTML = edit;
			}
		})

		input.value = '';
		newLi.classList.add('listItem');
		newP.classList.add('itemText');
		removeButton.classList.add('removeItem');
		editButton.classList.add('editItem')

		newLi.append(newP);
		newLi.append(removeButton);
		newLi.append(editButton);
		list.append(newLi);
	} else {
		alert('Write something, unless you feel like doing nothing :)')
	}
}
