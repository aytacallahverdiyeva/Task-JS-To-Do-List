document.getElementById('todo-form').addEventListener('submit', function(e) {
	e.preventDefault();
	let todoInput = document.getElementById('todo-input');
	let todoList = document.getElementById('todo-list');
	let task = todoInput.value;
	if (task) {
	  let li = document.createElement('li');
	  li.innerHTML = task;
 
	  let deleteButton = document.createElement('button');
	  deleteButton.innerHTML = 'Delete';
	  deleteButton.classList.add('delete-button');
 
	  li.appendChild(deleteButton);
 
	  deleteButton.addEventListener('click', function() {
		 li.remove();
	  });
 
	  li.addEventListener('click', function() {
		 this.classList.toggle('completed');
	  });
 
	  todoList.appendChild(li);
	  todoInput.value = '';
	}
 });