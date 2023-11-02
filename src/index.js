//date
const date = new Date();
const todayDate = date.toLocaleDateString();
document.getElementById('todayDate').innerHTML = todayDate;

//add item
const userInput = document.getElementById('userInput');
const todoList = document.getElementById('todoList');

function addItem() {
	if (userInput.value === '') {
		alert('You really got nothing to do?');
	}
	else {
		const li = document.createElement('li');
		li.innerHTML = userInput.value;
		todoList.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
		userInput.value = ''
	}
}

todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
	else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove();
	}
}, false);
