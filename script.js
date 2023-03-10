//your code here
const input = document.getElementById('newTodoInput');
const list = document.getElementById('todoList');

document.getElementById('addTodoBtn').onclick=function(){
	if(input.value.length == 0){
		alert("Please fill to do list.")
	}else {
	const li = document.createElement('li');
	list.appendChild(li).innerHTML = input.value;
	input.value = "";
	}

}

