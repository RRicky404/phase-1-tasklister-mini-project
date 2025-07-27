document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form reload

    const taskText = taskInput.value.trim();
    if (taskText === "") return; // don’t add empty tasks

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);
    taskInput.value = ""; // reset form
  });
});
