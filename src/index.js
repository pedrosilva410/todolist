//date
const date = new Date();
const todayDate = date.toLocaleDateString();
document.getElementById('todayDate').innerHTML = todayDate;

//add item
const userInput = document.getElementById('userInput');
const todoList = document.getElementById('todoList');

function addItem() {
	if (userInput.value === '') {
		alert('You really got nothing to do?')
	}
	else {
		const li = document.createElement('li');
		li.innerHTML = userInput.value;
		todoList.appendChild(li)
		userInput.value = ''
	}
}
