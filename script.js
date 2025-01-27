document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Function to load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.forEach((taskText) => addTask(taskText, false));
    }
  
    // Function to add a task
    function addTask(taskText, save = true) {
      const taskText = taskInput.value.trim();
      
      if (!taskText.trim()) {
        alert("Please enter a task");
        return;
      }
  
      const li = document.createElement("li");
      li.textContent = taskText;
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
  
      removeBtn.onclick = function () {
        taskList.removeChild(li);
        removeTaskFromStorage(taskText);
      };
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
      }
  
      taskInput.value = "";
    }
  
    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = storedTasks.filter((task) => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  
    // Load tasks from Local Storage when the page loads
    loadTasks();
  
    // Event listeners
    addButton.addEventListener("click", () => addTask(taskInput.value));
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask(taskInput.value);
      }
    });
  });
  
  