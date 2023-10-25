const date = new Date()
const todayDate = date.toLocaleDateString('de-de');
document.getElementById('todayDate').innerHTML = todayDate;
console.log(todayDate);

const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList')

addButton.addEventListener(click, addItem)

function addItem() {
	const newItem = document.createElement('li');
	const newText = document.createElement('p')
	const newInput = userInput.innerHTML()

	newText.appendChild(newInput);
	newItem.appendChild(newText);
	todoList.appendChild(newItem);
}
