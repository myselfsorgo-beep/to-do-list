const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById ("todoList");



addBtn.addEventListener("click",function() {
    console.log ("button was clicked");
});

function addTask() {
    const li = document.createElement("li");
     

    const span = document.createElement("span");
    span.textContent = input.value;
    span.addEventListener("click" , function () {
        li.classList.toggle("done");
    });
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent ="delete";

    deleteBtn.addEventListener("click" , function() {
        li.remove();
    });


    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value ="";
}  
 
addBtn.addEventListener("click" , addTask);

input.addEventListener("keydown" , function(e){
    if (e.key === "Enter"){
        addTask();
    }

});