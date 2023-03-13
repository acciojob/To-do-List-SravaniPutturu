//your code here
const input = document.getElementById('newTodoInput');
const ol = document.getElementById('todoList');
const btn = document.getElementById('addTodoBtn')
function addTodo(){
	if(input.value){
	const li = document.createElement('li');
		li.innerHTML = input.value;
	ol.appendChild(li);
	input.value = "";
	}

}
btn.addEventListener('click',addTodo)
