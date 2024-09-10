function changeBgAndColor() {
  const element = document.querySelector(".title");
  element.classList.toggle("title-appearance");
}

const button = document.getElementById("change-title");

button.addEventListener("click", changeBgAndColor);
