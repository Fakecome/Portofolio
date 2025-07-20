const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");

    let icon = document.createElement("i");
    icon.className = "far fa-circle";
    li.appendChild(icon);

    let taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.innerHTML = inputBox.value;
    li.appendChild(taskText);

    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times;";
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    const target = e.target;
    const li = target.closest('li');

    if (!li) return;

    if (target.classList.contains('delete-btn')) {
        li.remove();
        saveData();
    } else if (target.tagName === 'I' || target.classList.contains('task-text')) {
        li.classList.toggle("checked");
        const icon = li.querySelector('i');
        if (li.classList.contains("checked")) {
            icon.className = "fas fa-check-circle";
        } else {
            icon.className = "far fa-circle";
        }
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const data = localStorage.getItem("data");
    // Automatically clear old, incompatible data from localStorage
    if (data && !data.includes('<i class="')) {
        localStorage.removeItem("data");
        listContainer.innerHTML = ""; // Start with a clean list
    } else {
        listContainer.innerHTML = data || ""; // Load valid data or start empty
    }
}

showTask(); 
