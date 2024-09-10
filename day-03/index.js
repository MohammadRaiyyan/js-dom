// Problem: Write a function that removes a selected element from the DOM.

function removeElement() {
  const element = document.querySelector("h2");
  element.remove();
}

const button = document.querySelector("button");
button.addEventListener("click", removeElement);
