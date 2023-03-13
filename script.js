//your code here
const input = document.getElementById('newTodoInput');
const ol = document.getElementById('todoList');

document.getElementById('addTodoBtn').onclick=function(){
	if(input.value){
	const li = document.createElement('li');
		li.innerHTML = input.value;
	ol.appendChild(li);
	input.value = "";
	}

}

