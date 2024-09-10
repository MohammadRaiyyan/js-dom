// <!--Problem: Create a new div element, add some text to it, and append it to the body or another element. -->

const body = document.querySelector("body");
const div = document.createElement("div");

div.textContent = "Some dummy text content";

body.appendChild(div);
