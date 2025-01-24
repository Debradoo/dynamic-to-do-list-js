// Select DOM Elements:
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Function to add a task
    function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Check if taskText is empty
      if (taskText === "") {
        alert("Please enter a task");
        return; // Stop further execution
      }
  
      // Create a new list item (li) and set its textContent to taskText
      const li = document.createElement("li");
      li.textContent = taskText;
  
      // Create a Remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
  
      // Add an event listener to the Remove button to delete the task
      removeBtn.onclick = function () {
        taskList.removeChild(li); // Remove the task from the list
      };
  
      // Append the Remove button to the list item
      li.appendChild(removeBtn);
  
      // Append the list item to the task list
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = "";
    }
  
    // Add event listener to the Add Task button
    addButton.addEventListener("click", addTask);
  
    // Add event listener to the input field to handle Enter key
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  