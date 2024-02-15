/*Declare const with data from element*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/*Add a task function*/
function addTask() {

    /*If empty throw error*/
    if (inputBox.value === '') {
        alert("You must write something");
    } else {

        /*If content create li element with cancel button*/
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    /*Clear the input after task added*/
    inputBox.value = "";

    /*Invoke save data function*/
    saveData();
}

/*Event listener on click on a task*/
listContainer.addEventListener("click", function(e){
    /*Check if task is checked or not and toggle class then save data*/
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/*Save data function to store in local browser cache*/
function saveData() {
    localStorage.setItem("todo",listContainer.innerHTML);
}

/*Retrieve data from local browser cache*/
function showTask() {
    listContainer.innerHTML = localStorage.getItem("todo");
}

/*Display the todo list*/
showTask();