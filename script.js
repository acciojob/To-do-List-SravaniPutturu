//your code here
var todoValue = document.getElementById('newTodoInput');
var ol = document.getElementById('todoList');
var btn = document.getElementById('addTodoBtn')
function addTodo(){
	if(todoValue.value){
	var abc = document.createElement('li');
		abc.textContent = todoValue.value;
	ol.appendChild(abc);
	todoValue.value = "";
	}

}
btn.addEventListener('click',addTodo)
