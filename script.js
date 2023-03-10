//your code here
const input = document.getElementById('newTodoInput');
const btn = document.getElementById('addTodoBtn');
const list = document.getElementById('todoList');

function myFunction(){
   const li = document.createElement('li');
	list.appendChild(li).innerHTML = input.value;
}

