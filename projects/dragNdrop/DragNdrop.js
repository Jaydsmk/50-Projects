const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragleave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("drag start");
  //   this.classList.add("hold");
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
  //   this.className = "invisible";
}
function dragEnd() {
  console.log("drag end");
  this.className = "fill";
}
function dragOver(e) {
  console.log("drag over");
  e.preventDefault();
}
function dragEnter(e) {
  console.log("drag Enter");
  e.preventDefault();
  this.className += " hovered";
}
function dragleave() {
  console.log("drag leave");
  this.className = "empty";
}
function dragDrop() {
  console.log("drag drop");
  this.className = "empty";
  this.append(fill);
}
