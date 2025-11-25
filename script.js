let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let filterButtons = document.querySelectorAll(".filter-btn");
let modeBtn = document.getElementById("modeBtn");

// Load tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filterType = "all";

displayTasks();

// Add new task
addBtn.addEventListener("click", () => {
  let taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ text: taskText, completed: false });
  saveTasks();
  displayTasks();
  taskInput.value = "";
});

// Display tasks with filters
function displayTasks() {
  taskList.innerHTML = "";

  let filtered = tasks.filter(task => {
    if (filterType === "all") return true;
    if (filterType === "completed") return task.completed;
    if (filterType === "pending") return !task.completed;
  });

  filtered.forEach((task, index) => {
    let li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      ${task.text}
      <span class="task-actions">
        <button class="done-btn" onclick="toggleDone(${index})">✔</button>
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </span>
    `;

    taskList.appendChild(li);
  });
}

// Mark as done
function toggleDone(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  displayTasks();
}

// Edit task
function editTask(index) {
  let newTask = prompt("Edit task:", tasks[index].text);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index].text = newTask;
    saveTasks();
    displayTasks();
  }
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

// Filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    filterType = btn.dataset.filter;
    displayTasks();
  });
});

// Dark / Light mode
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    modeBtn.textContent = "☀️ Light Mode";
  } else {
    modeBtn.textContent = "🌙 Dark Mode";
  }
});

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
