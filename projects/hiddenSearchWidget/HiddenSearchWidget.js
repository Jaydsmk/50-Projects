const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active"); //add or remove(true or false) every time the action
  input.focus(); //add autofocus(blinking cusrsor pointer) into the input tag.
});
