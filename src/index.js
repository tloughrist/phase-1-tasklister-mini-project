document.addEventListener("DOMContentLoaded", () => {
  let submitButton = document.querySelectorAll('input')[1];
  submitButton.addEventListener('click', (e) => {
    //Prevent page from reloading
    e.preventDefault();
    //Get the text from the text input field
    let newTask = document.getElementById('new-task-description').value;
    //Prevent empty entries
    if (newTask) {
      //Create a list item with the text from the input field
      let li = document.createElement("li");
      li.textContent = ` ${newTask} `;
      //Create a dropdown menu of priorities and add it to the list item
      li.style.color = 'green';
      let dropDown = document.createElement("select");
      dropDown.appendChild(new Option('low'));
      dropDown.appendChild(new Option('med'));
      dropDown.appendChild(new Option('high'));
      li.prepend(dropDown);
      //Create a delete button and add it to the list item
      let delBtn = document.createElement("button");
      delBtn.textContent = 'X';
      li.appendChild(delBtn);
      //Insert the list item into the unordered todo list
      document.getElementById('tasks').append(li);
      //Allow the delete button to, you know, delete stuff
      delBtn.addEventListener('click', () => li.remove());
      //Change color based on priority
      dropDown.addEventListener('change', () => {
        if (dropDown.value === 'low') {
          li.style.color = 'green';
        } else if (dropDown.value === 'med') {
          li.style.color = 'orange';
        } else if (dropDown.value === 'high') {
          li.style.color = 'red';
        }
      });
    }
    //Reset the entry field
    let form = document.getElementById('create-task-form');
    form.reset();
  })
  
});
