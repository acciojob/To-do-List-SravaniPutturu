//your code here
const input = document.getElementById('newTodoInput');
const ol = document.getElementById('todoList');

document.getElementById('addTodoBtn').onclick=function(){
	if(input.value.trim().length == 0){
		alert("Please fill to do list.")
	}else {
	const li = document.createElement('li');
		li.innerHTML = input.value;
	ol.appendChild(li);
	input.value = "";
	}

}

