// var ul = document.getElementById("list-container")
// var input = document.getElementById("input")

// function add(){
//     var listItem = document.createElement("li")
//     listItem.innerHTML = input.value + "<button onclick='deleteItem(event)'>Delete<button>"
//     ul.append(listItem)
// }

// function deleteItem(event) {
//     event.target.parentElement.remove()    
// }

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0)
    {
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#task').innerHTML 
        +=
        `<div class="task"> 
            <span id="taskname">
               ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
         </div>
        `;

        var current_task = document.querySelectorAll(".delete");
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++)
    {
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newtask input").value ="";

}