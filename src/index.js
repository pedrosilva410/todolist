//date
const date = new Date();
const todayDate = date.toLocaleDateString();
document.getElementById('todayDate').innerHTML = todayDate;

//add item
const userInput = document.getElementById('userInput');
const todoList = document.getElementById('todoList');

function addTask() {
	event.preventDefault();
	if (userInput.value === '') {
		alert('You really got nothing to do?');
	}
	else {
		const li = document.createElement('li');
		li.innerHTML = userInput.value;
		todoList.appendChild(li);
		const check = document.createElement('span');
		check.innerHTML = '\u00d7';
		li.appendChild(check);
		const edit = document.createElement('button');
		userInput.value = '';
	}
}

// check and delete
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	} else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove();
	}
}, false);
