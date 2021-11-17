const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  //add or remove(true or false) every time the action
  search.classList.toggle("active");

  //add autofocus(blinking cusrsor pointer) into the input tag.
  input.focus();
});
