const newElement = document.createElement("li");
const list = document.querySelector("#myList");
const button = document.querySelector("#insertBeforeLast");

newElement.textContent = "New list item";
button.addEventListener("click", function () {
  list.insertBefore(newElement, list.lastElementChild);
});
