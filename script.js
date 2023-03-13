//your code here
const todoValue = document.getElementById('newTodoInput');
const ol = document.getElementById('todoList');
const btn = document.getElementById('addTodoBtn')
function addTodo(){
	if(todoValue.value){
	const li = document.createElement('li');
		li.textContent = todoValue.value;
	ol.appendChild(li);
	input.value = "";
	}

}
btn.addEventListener('click',addTodo)
