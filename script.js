const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    //Checking if the input box value is empty
    if(inputBox.value === '')
    {
        //Sends alert
        alert("You must write something!");
    }
    else{
        //Creating li element and storing inputBox value in it
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        //Displaying li element in list container
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }


    inputBox.value = "";
    saveData();
}

//Whenver we click on the container where all the tasks are stored
listContainer.addEventListener("click", function(e){
    //If we clicked LI it will be checked
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }

    //If it is span it will delete the parent element
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();