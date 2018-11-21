(function () {
  const btn = document.querySelector(".button-add");
  let textInput = document.querySelector(".text-input");
  let textOutput = document.querySelector(".task-out");
  let todoList = [];

  btn.addEventListener("click", () => {
    let task = textInput.value;
    let temp = {};
    temp.todo = task;
    temp.check = false;
    // let i = todoList.length;
    // todoList[i] = temp;
    todoList.push(task);

    (function out() {
      let newTaskArea = document.createElement('section');
      newTaskArea.className = "task-wrapper";
      textOutput.appendChild(newTaskArea);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      newTaskArea.appendChild(checkbox);

      const newTask = document.createElement('p');
      newTask.className = "task-style";
      newTask.innerHTML = `${task}`;
      newTaskArea.appendChild(newTask);

      textInput.value = '';
    } ());
  });

} ());

// https://www.youtube.com/watch?v=742Yk1W41tc
