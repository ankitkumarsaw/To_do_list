let toDoContainer = document.getElementById('toDoContainer');
let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoremove = document.getElementById('toDoremove');
let todoList;
showTodoList();
function showTodoList() {
  toDoContainer.innerHTML = "";
  let div = '';
  let paragraph1 = JSON.parse(localStorage.getItem('paragraph'));
  if (paragraph1 === null) {
    todoList = []
  } else {
    todoList = paragraph1;
  }
  todoList.forEach((_, index) => {
    let list = todoList[index];
     div += `
     <div>
    <p class = "paragraph-styling">${list}</p>
    <button class = "deleteElement" onclick = "deleteList(${index})">remove</button>
    </div>
   `;
    
  })
  toDoContainer.innerHTML = div;
  console.log(div);
    inputField.value = "";
}

addToDoButton.addEventListener('click', function () {
  if (inputField.value != "") {
    todoList.push(inputField.value.trim());
    localStorage.setItem("paragraph", JSON.stringify(todoList));
  } else {
    alert("PLEASE ENTER THE TEXT")
  }
  showTodoList();
});

toDoremove.addEventListener("click", function (){
localStorage.clear();
toDoContainer.innerHTML = "";
showTodoList();
})

function deleteList(index){
  console.log(index);
  
  todoList.splice(index, 1);
  localStorage.setItem("paragraph", JSON.stringify(todoList));
  showTodoList();
}
