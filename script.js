const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const themeToggle = document.getElementById("themeToggle");

let completedTasks = 0;

// Add Task
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        completedTasks += li.classList.contains("completed") ? 1 : -1;
        updateCount();
    });

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (li.classList.contains("completed")) completedTasks--;
        li.remove();
        updateCount();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    updateCount();
});

// Update Count
function updateCount() {
    taskCount.textContent = `Total Tasks: ${taskList.children.length} | Completed: ${completedTasks}`;
}

// Dark Mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
