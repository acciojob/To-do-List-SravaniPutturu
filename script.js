//your code here
var todoValue = document.getElementById('newTodoInput');
var ol = document.getElementById('todoList');
var btn = document.getElementById('addTodoBtn')
function addTodo(){
	if(todoValue.value){
	var li = document.createElement('li');
		li.textContent = todoValue.value;
	ol.appendChild(li);
	todoValue.value = "";
	}

}
btn.addEventListener('click',addTodo)
