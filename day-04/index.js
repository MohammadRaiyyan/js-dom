// Problem: Create a to-do list where users can add and remove list items dynamically.
// Practice: Use appendChild(), removeChild(), and createElement().
const body = document;
const list = document.createElement("ul");
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const container = document.getElementById("todo-container");

let todos = [];
function createTodo(newTodo) {
  const elements = todos.map((todo, i) => {
    return `
        <li data-key=${i}>${todo}
        <span>x</span>
        </li>
        `;
  });
  //   const todoElement = document.createElement("li");
  //   const deleteElement = document.createElement("span");
  //   deleteElement.textContent = "x";
  //   todoElement.textContent = newTodo;
  //   todoElement.appendChild(deleteElement);
  //   list.appendChild(todoElement);
  list.innerHTML = elements.join(" ");
  container.appendChild(list);
}

function removeTodo(event) {
  if (event.target.tagName === "SPAN") {
    const targetElement = event.target;
    // targetElement.parentNode.remove();
    index = +targetElement.parentNode.dataset.key;
    const filteredTodos = todos.filter((_, i) => i !== index);
    todos = filteredTodos;
    createTodo();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const todo = formData.get("todo");
  todos.push(todo);
  createTodo();
  input.value = "";
});

list.addEventListener("click", removeTodo);
